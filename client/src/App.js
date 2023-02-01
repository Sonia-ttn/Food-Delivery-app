import React from "react";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
// import Orders from "./components/Orders";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./components/ContextReducer";
function App() {
  return (
    <CartProvider>
      <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          {/* <Route exact path="/orders" element={<Orders />}></Route> */}

        </Routes>
      </div>
    </Router>
    </CartProvider>
    
  );
}
export default App;