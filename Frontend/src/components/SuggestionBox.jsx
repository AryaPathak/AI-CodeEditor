import React from "react";

const SuggestionBox = ({ suggestion, explanation, isLoading, onIntegrate }) => {
  return (
    <div style={{ marginTop: "20px", padding: "20px", border: "1px solid gray", borderRadius: "8px", backgroundColor: "#1f1f1f", color: "#eee" }}>
      {isLoading ? (
        <p>Loading suggestions...</p>
      ) : suggestion ? (
        <>
          <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Suggested Changes:</h2>
          <pre style={{ backgroundColor: "#2c2c2c", padding: "10px", borderRadius: "6px", overflowX: "auto" }}>
            {suggestion}
          </pre>

          <h3 style={{ fontSize: "18px", marginTop: "20px" }}>Explanation:</h3>
          <p style={{ backgroundColor: "#2c2c2c", padding: "10px", borderRadius: "6px" }}>
            {explanation}
          </p>

          <button onClick={onIntegrate} style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#4caf50", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>
            Integrate Code
          </button>
        </>
      ) : (
        <p>No suggestion yet. Submit code and prompt!</p>
      )}
    </div>
  );
};

export default SuggestionBox;
