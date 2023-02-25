const express = require("express");
const multer = require("multer");
require("./config");
const Product = require("./product");
const app = express();

app.use(express.json()); // to convert to string in JSON Format

const fileUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "fileUploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");     //file.filename gives undefined
    },
  }),
}).single("user_file");

app.post("/upload", fileUpload, (req, res) => {
  res.send("file uploaded");
});

app.listen(5000);
