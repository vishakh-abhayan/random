const express = require("express");
const qr = require("qr-image");

const app = express();

app.get("/qr", (req, res) => {
  const url = req.query.url;
  const qr_svg = qr.image(url, { type: "svg" });
  res.setHeader("Content-disposition", "attachment; filename=qrcode.svg");
  res.setHeader("Content-type", "image/svg+xml");
  qr_svg.pipe(res);
});

app.listen(3000, () => {
  console.log("QR code generator API listening on port 3000!");
});
