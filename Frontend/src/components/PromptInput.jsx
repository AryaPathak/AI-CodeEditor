import React from "react";

const PromptInput = ({ prompt, setPrompt, onSuggest }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Prompt:</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: "10px", fontSize: "14px", backgroundColor: "#1e1e1e", color: "#eee", borderRadius: "8px", border: "1px solid #333" }}
      />
      <button onClick={onSuggest} style={{ marginTop: "10px", padding: "10px 20px", backgroundColor: "#2196f3", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>
        Generate Suggestion
      </button>
    </div>
  );
};

export default PromptInput;
