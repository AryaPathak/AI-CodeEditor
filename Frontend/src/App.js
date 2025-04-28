import React, { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import PromptInput from "./components/PromptInput";
import SuggestionBox from "./components/SuggestionBox";
import { suggestCode } from "./api/suggest";

function App() {
  const [code, setCode] = useState("");
  const [prompt, setPrompt] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [explanation, setExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSuggest = async () => {
    setIsLoading(true);
    const { suggestion, explanation } = await suggestCode(code, prompt);
    setSuggestion(suggestion);
    setExplanation(explanation);
    setIsLoading(false);
  };

  const handleIntegrate = () => {
    setCode(suggestion);
    setSuggestion("");
    setExplanation("");
  };

  return (
    <div style={{ padding: "40px", backgroundColor: "#121212", minHeight: "100vh", color: "#fff" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Qpill Code Assistant </h1>

      <CodeEditor code={code} setCode={setCode} />
      <PromptInput prompt={prompt} setPrompt={setPrompt} onSuggest={handleSuggest} />
      <SuggestionBox suggestion={suggestion} explanation={explanation} isLoading={isLoading} onIntegrate={handleIntegrate} />
    </div>
  );
}

export default App;
