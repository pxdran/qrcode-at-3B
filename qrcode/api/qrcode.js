import QRCode from "qrcode";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const message =
    "Ato tu sa canteen may piso wifi to, HAHAHA For entertainment purpose only Developed by: Maglasang from 3B :)";

  QRCode.toDataURL(message, (err, qrcode) => {
    if (err) {
      return res.status(500).json({
        error: "Failed to generate QR code",
      });
    }

    res.status(200).json({
      qrcode: qrcode,
    });
  });
}
