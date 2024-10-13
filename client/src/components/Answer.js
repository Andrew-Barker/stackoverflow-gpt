import React from "react";
import Voter from "./Voter"; // Import the Voter component
import PostFooter from "./PostFooter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism"; // Import the theme
import "./Answer.css"; // Import custom CSS for additional styling

const parseContent = (content) => {
  const elements = [];
  let lastIndex = 0;

  // Match code blocks that start with ```language and end with ```
  const codeBlockRegex = /```(\w+)\n([\s\S]*?)```/gs;
  let match;

  // Iterate through the content and find code blocks
  while ((match = codeBlockRegex.exec(content)) !== null) {
    // Add the text before the code block
    if (match.index > lastIndex) {
      const textBeforeCodeBlock = content.slice(lastIndex, match.index);
      elements.push(renderTextWithFormatting(textBeforeCodeBlock));
    }

    // Extract the language (first capture group) and code content (second capture group)
    const language = match[1] || "plaintext"; // Fallback to plaintext if no language provided
    const codeContent = match[2];

    elements.push(
      <SyntaxHighlighter
        language={language} // Use the extracted language
        style={coy}
        customStyle={{
          background: "#f6f8fa",
          fontSize: "12px",
          padding: "12px",
          borderRadius: "6px",
          overflowX: "auto", // Allow horizontal scroll for long code blocks
        }}
      >
        {codeContent}
      </SyntaxHighlighter>
    );

    lastIndex = codeBlockRegex.lastIndex;
  }

  // Add any remaining text after the last code block
  if (lastIndex < content.length) {
    const remainingText = content.slice(lastIndex);
    elements.push(renderTextWithFormatting(remainingText));
  }

  return elements;
};

// Helper function to render text with inline code and treat ` as inline code
const renderTextWithFormatting = (text) => {
  // Split the text by inline code and **...** or `...`
  const parts = text.split(/(`.*?`|\*\*.*?\*\*)/g); // Splits text but keeps the backticks and asterisks

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`") && !part.includes("```")) {
      return (
        <code key={index} className="inline-code">
          {part.slice(1, -1)}
        </code>
      ); // Inline code wrapped in `...`
    } else if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <code key={index} className="inline-code">
          {part.slice(3, -3)}
        </code>
      ); // **...** treated as inline code, as discussed
    } else {
      return <span key={index}>{part}</span>; // Normal text
    }
  });
};

const Answer = ({ answer }) => {
  const parsedContent = parseContent(answer.content);

  return (
    <div className="mb-4 pb-4 border-b border-gray-300 rounded flex">
      {/* Voter Component on the left */}
      <Voter initialVotes={answer.votes} isAccepted={answer.isAccepted} />

      {/* Answer Content and Comments */}
      <div className="ml-4 flex-grow">
        {/* Render parsed content */}
        <div>{parsedContent}</div>

        {/* Comments below the answer content */}
        <div className="mt-4">
          <PostFooter dateString={answer.datePosted} comments={answer.comments} userName={answer.author} />
        </div>
      </div>
    </div>
  );
};

export default Answer;
