import React, { useRef } from "react";
import "./CodeBlock.css";
import "@monaco-editor/react";
import { Editor } from "@monaco-editor/react";



const CodeBlock: React.FC = () => {
  const editorRef = useRef<null | any>(null);
  function handleEditorDidMount(editor: any, monaco: any): void {
    editorRef.current = editor;
  }

  return (
    <div className="code-block-container">
      <div className="code-block-header"></div>
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
