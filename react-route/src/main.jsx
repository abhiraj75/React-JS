import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Products from "./pages/products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        
        <div style={{ height: "10vh" }}>
          <Header />
        </div>

        <div style={{ flex: 1, overflow: "auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<h1 style={{height: "100%",display: "flex",justifyContent: "center",alignItems: "center",}}>Wrong URL</h1>}/>
          </Routes>
        </div>

        <div style={{ height: "10vh" }}>
          <Footer />
        </div>

      </div>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);