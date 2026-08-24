import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [qrCode, setQrCode] = useState("");
  useEffect(() => {
    axios
      .get("/api/qrcode")
      .then((res) => {
        setQrCode(res.data.qrcode);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="app">
      <div className="content-container">
        <h1 className="qr-title">
          Scan for <span className="qr-title-span">Free Wifi!</span>
        </h1>

        {qrCode && (
          <div className="qrcode-container">
            <img
              className="qrcode-img"
              src={qrCode}
              alt="QR Code"
              width="300px"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
