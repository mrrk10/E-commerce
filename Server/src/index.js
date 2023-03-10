const app = require("express")();
const express = require("express");
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const bodyParser = require("body-parser");
const connect = require("./db/connect");
connect();

app.use(bodyParser.json());
app.use(cors());
const registerRouter = require("./routes/registerRouter");
const loginRouter = require("./routes/loginRouter");
app.use(registerRouter);
app.use(loginRouter);

const { join } = require("path");
app.use(express.static(join(__dirname, "uploads")));
// console.log(join(__dirname, 'uploads'))

const uploadRouter = require("./routes/uploadRouter");
app.use(uploadRouter);

const productRouter = require("./routes/productRouter");
app.use(productRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
