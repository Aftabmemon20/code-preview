import React, { useState } from "react";
import axios from "axios";

export default function CodePreview() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [preview, setPreview] = useState("");

  const handlePreview = async () => {
    const res = await axios.post("http://localhost:5000/preview", { language, code });
    setPreview(res.data.preview);
  };

  return (
    <div>
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>
      <textarea
        placeholder="Write your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>
      <button onClick={handlePreview}>Preview</button>
      {preview && <pre>{preview}</pre>}
    </div>
  );
}