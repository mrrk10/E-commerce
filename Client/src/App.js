import React, { useEffect } from "react";
import "./App.css";
import Login from "./containers/Auth/login";
import Register from "./containers/Auth/register";
import { Routes, Route, useNavigate, Switch } from "react-router-dom";
import UploadData from "../../Client/src/containers/Home/upload";
import Product from "../src/containers/pages/Product";
import Navbar from "../src/components/Navbar";
import Home from "../src/containers/pages/Home";
import Contact from "../src/containers/pages/Contact";
import About from "../src/containers/pages/About";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = JSON.parse(localStorage.getItem("user"));
    if (!isLogin) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/upload" element={<UploadData />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/" element={<Navbar />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About/>} />
      </Routes>
    </>
  );
};

export default App;
