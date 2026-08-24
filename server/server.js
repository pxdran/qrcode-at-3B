const express = require("express");
const QRCode = require("qrcode");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
const PORT = 3001;

app.get("/qrcode", (req, res) => {
  const message =
    "Atu to sa canteen may piso wifi to, HAHAHA For entertainment purpose only Developed by: Maglasang from 3B :)";

  QRCode.toDataURL(message, (err, qrcode) => {
    if (err) {
      return res.status(500).send({ Error: err });
    }
    res.send({ qrcode: qrcode });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT} `);
});
