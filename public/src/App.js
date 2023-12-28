import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import NexVista from "./pages/nexvista";
import Animation from "./pages/animation";
import axios from "axios";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} ></Route>
        <Route exact path="/login" element={<Login />} ></Route>
        <Route exact path="/" element={<Animation />} ></Route>
        <Route exact path="/default" element={<NexVista />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}