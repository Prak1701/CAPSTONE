import React, { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

  const scanEmail = () => {
    if (email.toLowerCase().includes("password") || email.toLowerCase().includes("urgent")) {
      setResult("⚠️ Suspicious - Might be phishing.");
    } else {
      setResult("✅ Safe");
    }
  };

  return (
    <div style={{ padding: 15, width: 300 }}>
      <h3>Phishing Email Scanner</h3>
      <textarea
        rows="5"
        placeholder="Paste email content here..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%" }}
      ></textarea>
      <button onClick={scanEmail} style={{ marginTop: 10 }}>Scan</button>
      {result && <p style={{ marginTop: 10 }}>{result}</p>}
    </div>
  );
}
