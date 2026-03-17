import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1e293b",
        color: "white",
        padding: "15px 30px",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>
        MyLogo
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
        <Link to="/products" style={{ color: "white", textDecoration: "none" }}>Products</Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
      </div>
    </div>
  );
}

export default Header;