import React, { useRef, useState } from "react";
import "./CodeBlock.css";
import "@monaco-editor/react";
import { Editor } from "@monaco-editor/react";

const CodeBlock: React.FC = () => {
  const editorRef = useRef<any>();
  const codeRef = useRef<HTMLElement>(null);

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }

  const [downloadButtonText, setDownloadButtonText] =
    useState("Download Code 📄");

  const handleDownloadClick = () => {
    if (editorRef.current) {
      const code = editorRef.current.getValue();
      const blob = new Blob([code], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "code.txt";
      a.click();
      URL.revokeObjectURL(url);
      setDownloadButtonText("Downloaded! 🡣");
      setTimeout(() => {
        setDownloadButtonText("Download Code 📄");
      }, 2000);
    }
  };

  const [copyButtonText, setCopyButtonText] = useState("Copy Code 📷");
  const handleCopyClick = () => {
    if (editorRef.current) {
      const code = editorRef.current.getValue();
      navigator.clipboard.writeText(code);
      setCopyButtonText("Copied! ✔");
      setTimeout(() => {
        setCopyButtonText("Copy Code 📷");
      }, 2000);
    }
  };

  return (
    <div className="code-block-container">
      <div className="code-block-header">
        <span> Let's start ;) </span>
        <button onClick={handleDownloadClick}>{downloadButtonText}</button>
        <button onClick={handleCopyClick}>{copyButtonText}</button>
      </div>
        <Editor
          height="100%"
          width="750px"
          defaultLanguage="javascript"
          onMount={handleEditorDidMount}
          theme="vs-dark"
        />
    </div>
  );
};

export default CodeBlock;
