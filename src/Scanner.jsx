import { useState } from "react";
import "./Generator.css";
import { Scanner } from "@yudiel/react-qr-scanner";

export default function Scaner() {
  const [result, setResult] = useState(null);
  const handleScan = (result) => {
    setResult(result[0]?.rawValue);
  };
  const handleError = (error) => {
    console.error("Error: ", error);
  };

  return (
    <div className="scanner">
      <p>{result}</p>
      <Scanner
        onScan={handleScan}
        onError={handleError}
        sound={false}
        allowMultiple
      />
    </div>
  );
}
