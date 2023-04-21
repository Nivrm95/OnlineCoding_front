//////////socket - without user/////////////
// import React, { useRef, useState, useEffect } from "react";
// import "./CodeBlock.css";
// import "@monaco-editor/react";
// import { Editor} from "@monaco-editor/react";
// import { io, Socket } from "socket.io-client";

// interface CodeBlockProps {
//   roomId: string;
// }

// interface IncomingCodeEvent {
//   code: string;
//   senderId: string;
// }

// const CodeBlock: React.FC<CodeBlockProps> = ({ roomId }) => {
//   const [editorValue, setEditorValue] = useState("");
//   const [downloadButtonText, setDownloadButtonText] = useState("Download Code 📄");
//   const [copyButtonText, setCopyButtonText] = useState("Copy Code 📷");
//   const [socket, setSocket] = useState<Socket | null>(null);
//   const editorRef = useRef<any>();
//   const codeRef = useRef<HTMLElement>(null);
//   const [canEdit, SetCanEdit ] = useState <boolean> (false);

//   useEffect(() => {
//     const newSocket = io("http://localhost:8000", {
//       query: { roomId },
//     });

//     setSocket(newSocket);

//     return () => {
//       newSocket.disconnect();
//     };
//   }, [roomId]);

//   useEffect(() => {
//     if (socket) {
//       socket.on("code", (event: IncomingCodeEvent) => {
//         if (event.senderId !== socket.id) {
//           setEditorValue(event.code);
//         }
//       });
//     }
//   }, [socket]);

//   useEffect(() => {
//     if (socket) {
//       socket.on("canEdit", (canEdit: boolean) => {
//         SetCanEdit(canEdit);
//       });
//     }
//   }, [socket]);

//   const handleEditorDidMount = (editor: any, monaco: any) => {
//     editorRef.current = editor;
//   };

//   const handleDownloadClick = () => {
//     const blob = new Blob([editorValue], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "code.txt";
//     a.click();
//     URL.revokeObjectURL(url);
//     setDownloadButtonText("Downloaded! 🡣");
//     setTimeout(() => {
//       setDownloadButtonText("Download Code 📄");
//     }, 2000);
//   };

//   const handleCopyClick = () => {
//     navigator.clipboard.writeText(editorValue);
//     setCopyButtonText("Copied! ✔");
//     setTimeout(() => {
//       setCopyButtonText("Copy Code 📷");
//     }, 2000);
//   };

//   const handleEditorChange = (value: string | undefined) => {
//     if (value !== undefined) {
//       setEditorValue(value);

//       if (socket) {
//         socket.emit("code", { code: value });
//       }
//     }
//   };

//   return (
//     <div className="code-block-container">
//       <div className="code-block-header">
//         <span> Let's start ;) </span>
//         <button onClick={handleDownloadClick}>{downloadButtonText}</button>
//         <button onClick={handleCopyClick}>{copyButtonText}</button>
//       </div>
//       <Editor
//         height="100%"
//         width="750px"
//         defaultLanguage="javascript"
//         value={editorValue}
//         onMount={handleEditorDidMount}
//         onChange={handleEditorChange}
//         theme="vs-dark"
//       />
//     </div>
//   );
// };

// export default CodeBlock;

//////////socket - try 1/////////////
import React, { useRef, useState, useEffect } from "react";
import "./CodeBlock.css";
import "@monaco-editor/react";
import { Editor } from "@monaco-editor/react";
import { io, Socket } from "socket.io-client";

interface CodeBlockProps {
  roomId: string;
}

interface IncomingCodeEvent {
  code: string;
  senderId: string;
  roomSize: number;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ roomId }) => {
  const [editorValue, setEditorValue] = useState("");
  const [downloadButtonText, setDownloadButtonText] =
    useState("Download Code 📄");
  const [copyButtonText, setCopyButtonText] = useState("Copy Code 📷");
  const [socket, setSocket] = useState<Socket | null>(null);
  const editorRef = useRef<any>();
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const [users, setUsers] = useState<string[]>([]);

  console.log(roomId);

  useEffect(() => {
    const newSocket = io("http://localhost:8000", {
      query: { roomId },
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [roomId]);

  useEffect(() => {
    if (socket) {
      socket.on("code", (event: IncomingCodeEvent) => {
        if (event.senderId !== socket.id) {
          console.log(socket.id);
          setEditorValue(event.code);
        }
      });

      socket.on("roomSize", (event: any) => {
        console.log("eventRoomSize", event.roomSize);
        if (event.roomSize > 1 ) {
          console.log("im first!");
          setCanEdit(true);
        }
      });
    }
  }, [socket]);


  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
  };

  const handleDownloadClick = () => {
    const blob = new Blob([editorValue], { type: "text/plain" });
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
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(editorValue);
    setCopyButtonText("Copied! ✔");
    setTimeout(() => {
      setCopyButtonText("Copy Code 📷");
    }, 2000);
  };

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setEditorValue(value);

      if (socket) {
        socket.emit("code", { code: value });
      }
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
        value={editorValue}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{ readOnly: !canEdit }}
      />
    </div>
  );
};

export default CodeBlock;
