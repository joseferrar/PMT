require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
//cors
// app.use(cors());

//request json
app.use(express.json());

//middleware
app.use(morgan("dev"));

//routes
app.use(require("./routes/auth"));

//mongodb connection url
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("mongoose connected successfully");
});
mongoose.connection.on("err", (err) => {
  console.log("mongoose error", err);
});

app.get("/test", (req, res) => {
  res.json("Hello node js");
});

app.listen(process.env.PORT, () => {
  console.log(`Server stared ${process.env.PORT}`);
});
