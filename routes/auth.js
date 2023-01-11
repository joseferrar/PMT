const express = require("express");
const router = express.Router();
const authSchema = require("../schema/Auth");
const Token = require("../schema/Token");
const bcrypt = require("bcryptjs");
const CryptoJS = require("crypto-js");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const sendEmail = require("../util/sendEmail");

const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: "krugerrex4@gmail.com",
    pass: "jqyhvvvjfzecheab",
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
    // var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(req.body.password), 'my-secret-key@123').toString();

    // //log decrypted Data
    // console.log('decrypted Data -')
    // console.log(ciphertext);
    var bytes = CryptoJS.AES.decrypt(req.body.password, "my-secret-key@123");
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    var hash = await bcrypt.hash(decryptedData, 10);
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
  console.log("passs", password);
  console.log(req.body);

  var bytes = CryptoJS.AES.decrypt(password, "my-secret-key@123");
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  authSchema.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid Email" });
    }

    bcrypt
      .compare(decryptedData, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          const { _id, username, email } = savedUser;
          // res.json({ user: { _id, name, email } });
          res.json({ message: "successfully signed in", _id });
        } else {
          return res.status(422).json({ error: "Invalid Password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
// router.post("/api/reset", async (req, res) => {
//   const { text } = req.body;
//   const mailData = {
//     from: "krugerrex4@gmail.com", // sender address
//     to: "joseferrar4@gmail.com", // list of receivers
//     subject: "Sending Email using Node.js",
//     text: text,
//     html: `<b>Hey spiderman! </b>  <br> This is our first message sent with ${text}<br/>`,
//   };

//   transporter.sendMail(mailData, function (err, info) {
//     if (err) console.log(err);
//     else {
//       res
//         .status(200)
//         .send({ message: "Mail send", message_id: info.messageId });
//     }
//   });
// });

router.post("/api/sendmail", async (req, res) => {
  try {
    const user = await authSchema.findOne({ email: req.body.email });
    await authSchema.findOne({ email: req.body.email }).then((savedUser) => {
      if (!savedUser) {
        return res
          .status(422)
          .json({ error: "user with given email doesn't exist" });
      }
      let token = Token.findOne({ userId: user._id });
      if (!token) {
        token = new Token({
          userId: user._id,
          token: crypto.randomBytes(32).toString("hex"),
        }).save();
      }

      const link = `${process.env.BASE_URL}/api/${user._id}/${token.token}`;
      sendEmail(user.email, "Password reset", link);

      res.json({ userId: user._id, token: token.token });
    });
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
});

router.post("/api/:userId/:token", async (req, res) => {
  try {
    const user = await authSchema.findById(req.params.userId);
    if (!user) return res.status(400).send("invalid link or expired");
    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send("Invalid link or expired");
    var hash = await bcrypt.hash(req.body.password, 10);
    user.password = hash;
    await user.save();
    await token.delete();

    res.send("password reset sucessfully.");
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
});

//update user
router.put("/api/edituser/:id", async (req, res) => {
  const update = await authSchema.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.json(update);
});

router.get("/api/myprofile/:id", async (req, res) => {
  authSchema
    .findById(req.params.id)
    .then((myprofile) => {
      res.json(myprofile);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
