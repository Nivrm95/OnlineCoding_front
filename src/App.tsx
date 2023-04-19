import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Frame from "./componnents/frame/Frame";
import HomePage from "./pages/homePage/HomePage";
import CodePage from "./pages/codePage/CodePage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frame />}>
            <Route index element={<HomePage />} />
            <Route path="/CodePage" element={<CodePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
