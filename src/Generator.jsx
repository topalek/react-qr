import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

export default function Generator() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setResult(""); // Clear the result when the input changes
  };
  const handleClick = () => {
    setResult(value);
    setValue(""); // Clear the input field after generating the QR code
  };

  return (
    <>
      <div>{result && <QRCodeSVG value={result} />}</div>
      <div className="input-group mt-3">
        <input
          type="search"
          value={value}
          className="form-control"
          onChange={handleChange}
          placeholder="Введите текст для генерации QR-кода"
        />
        <button type="button" onClick={handleClick} className="btn btn-primary">
          Сгенерировать
        </button>
      </div>
    </>
  );
}
