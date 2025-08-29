import React from "react";
import ReactDOM from "react-dom/client";
import PrisonSentenceCalculator from "./PrisonSentenceCalculator";
import "./index.css";

function App() {
  return <PrisonSentenceCalculator />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);