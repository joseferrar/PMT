const express = require("express");
const router = express.Router();
const authSchema = require("../schema/Auth");
const Token = require("../schema/Token");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const sendEmail = require("../util/sendEmail");

const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: "joseferrar4@gmail.com",
    pass: "vwjukyrzifzwctac",
  },
  secure: true,
});

//register api
router.post("/api/register", async (req, res) => {
  try {
    var emailExists = await authSchema.findOne({ email: req.body.email });
    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }
    var hash = await bcrypt.hash(req.body.password, 10);

    const user = await new authSchema({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      role: req.body.role || "user",
      password: hash,
      status: req.body.status,
    });

    const data = await user.save();
    res.send(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

//login api
router.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  authSchema.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid Email" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          const { _id, username, email } = savedUser;
          // res.json({ user: { _id, name, email } });
          res.json({ message: "successfully signed in" });
        } else {
          return res.status(422).json({ error: "Invalid Password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
router.post("/api/reset", async (req, res) => {
  const { text } = req.body;
  const mailData = {
    from: "joseferrar4@gmail.com", // sender address
    to: "joseferrar4@gmail.com", // list of receivers
    subject: "Sending Email using Node.js",
    text: text,
    html: `<b>Hey spiderman! </b>  <br> This is our first message sent with ${text}<br/>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else {
      res.status(200).send({ message: "Mail send", message_id: info.messageId})
    }
 });
});


router.post("/api/sendmail", async (req, res) => {
  try {


      const user = await authSchema.findOne({ email: req.body.email });
      if (!user)
          return res.status(400).send("user with given email doesn't exist");

      let token = await Token.findOne({ userId: user._id });
      if (!token) {
          token = await new Token({
              userId: user._id,
              token: crypto.randomBytes(32).toString("hex"),
          }).save();
      }

      const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
      await sendEmail(user.email, "Password reset", link);

      res.send("password reset link sent to your email account");
  } catch (error) {
      res.send("An error occured");
      console.log(error);
  }
});

module.exports = router;
