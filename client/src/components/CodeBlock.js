import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      className="code-block"
      language={language || "python"} // Default to python if language is not provided
      style={coy}
      customStyle={{
        background: "#000000",
        fontSize: "12px",
        padding: "12px",
        borderRadius: "6px",
        maxWidth: "100%",
        overflowX: "auto", // Enable horizontal scrolling
      }}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
