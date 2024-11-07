import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

function QRCodeGenerator() {
  const [link, setLink] = useState('');
  const qrRef = useRef();

  const handleDownload = () => {
    const canvas = qrRef.current.querySelector('canvas');
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = url;
      link.download = 'qrcode.png';
      link.click();
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-900 h-screen w-screen">
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center text-gray-100 mb-6">QR Code Generator</h1>
        <input
          type="text"
          placeholder="Enter a link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full p-3 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {link && (
          <div className="flex justify-center mb-4" ref={qrRef}>
            <QRCodeCanvas
              value={link}
              size={256}
              className="rounded-lg shadow-lg"
            />
          </div>
        )}
        {link && (
          <div className="text-center">
            <button
              onClick={handleDownload}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
              Download QR Code
            </button>
          </div>
        )}
        <p className="text-sm text-gray-400 text-center">
          Enter a URL to generate a QR code instantly!
        </p>
      </div>
    </div>
  );
}

export default QRCodeGenerator;
