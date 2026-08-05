"use client";

import Image from "next/image";
import { useCart } from "../content/CartContext";

export default function Navbar() {
  const { cart, setIsCartOpen } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav
      style={{
        width: "100%",
        height: "80px",
        background: "#1f1a17",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        boxSizing: "border-box",
        flexWrap: "wrap",
      }}
    >
      <a
        href="#home"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
        }}
      >
        <Image
          src="/images/logo.png"
          alt="Beehivel Logo"
          width={45}
          height={45}
        />

        <span
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#d4a017",
          }}
        >
          Beehivel
        </span>
      </a>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
          fontWeight: "bold",
          fontSize: "15px",
        }}
      >
        <a
          href="#home"
          style={{ color: "white", textDecoration: "none" }}
        >
          Home
        </a>

        <a
          href="#products"
          style={{ color: "white", textDecoration: "none" }}
        >
          Shop
        </a>

        <a
          href="#about"
          style={{ color: "white", textDecoration: "none" }}
        >
          About
        </a>

        <a
          href="#contact"
          style={{ color: "white", textDecoration: "none" }}
        >
          Contact
        </a>

        <button
          onClick={() => setIsCartOpen(true)}
          style={{
            background: "#d4a017",
            color: "white",
            border: "none",
            borderRadius: "20px",
            padding: "10px 18px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          🛒 Cart ({totalItems})
        </button>
      </div>
    </nav>
  );
}