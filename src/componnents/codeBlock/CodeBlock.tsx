import React, { useState, useEffect, useRef } from "react";
import "./CodeBlock.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/vs2015.css";

hljs.registerLanguage("javascript", javascript);

const CodeBlock: React.FC = () => {
  const [code, setCode] = useState("");
  const codeRef = useRef<HTMLPreElement>(null);


  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [code]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter" && event.shiftKey) {
      setCode((prevCode) => prevCode + "\n");
      event.preventDefault();
    }
  }

  return (
    <div className="code-block-container">
      <div className="code-block-header"></div>
      <pre
        ref={codeRef}
        className="javascript"
        contentEditable={true}
        onKeyDown={handleKeyDown}
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </div>
  );
};

export default CodeBlock;
