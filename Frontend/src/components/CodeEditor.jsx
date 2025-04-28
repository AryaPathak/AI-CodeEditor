import React from "react";

const CodeEditor = ({ code, setCode }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Code:</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={12}
        style={{ width: "100%", padding: "10px", fontSize: "14px", backgroundColor: "#1e1e1e", color: "#eee", borderRadius: "8px", border: "1px solid #333" }}
      />
    </div>
  );
};

export default CodeEditor;
