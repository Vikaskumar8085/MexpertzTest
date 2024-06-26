import React from "react";
import "./style/global.scss"
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ViewProduct from "./Pages/ViewProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:id" element={<ViewProduct />} />
      </Routes>
    </>
  );
}

export default App;
