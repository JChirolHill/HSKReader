import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import InputTextForm from "./InputTextForm";
import HSKReader from "./HSKReader";
import NoPage from "./NoPage";

const App = () => {
  const [text, setText] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<InputTextForm onChangeText={setText} />} />
          <Route path="reader" element={<HSKReader text={text} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
