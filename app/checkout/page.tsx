"use client";

import { useState } from "react";
import { useCart } from "../../content/CartContext";
import Link from "next/link";

export default function CheckoutPage() {

  const { cart } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);


  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  const orderText = cart
    .map(
      (item) =>
        `${item.name} x${item.quantity} = ₦${(
          item.price * item.quantity
        ).toLocaleString()}`
    )
    .join("\n");


  function sendOrder() {

    if (!name || !phone || !address) {
      alert("Please fill in all your details.");
      return;
    }


    const message = `
🐝 NEW BEEHIVEL ORDER

👤 Customer:
${name}

📞 Phone:
${phone}

📍 Delivery Address:
${address}


ORDER:

${orderText}


TOTAL:
₦${total.toLocaleString()}


Thank you for choosing Beehivel Honey 🍯
`;


    setLoading(true);


    setTimeout(() => {

      window.open(
        `https://wa.me/2348037311343?text=${encodeURIComponent(message)}`,
        "_blank"
      );


      setLoading(false);


    },800);

  }



  return (

    <main
      style={{
        minHeight:"100vh",
        background:"#fff8e7",
        padding:"120px 20px 50px",
      }}
    >


      <div
        style={{
          maxWidth:"900px",
          margin:"auto",
          background:"white",
          borderRadius:"30px",
          padding:"40px",
          boxShadow:"0 15px 40px rgba(0,0,0,0.1)",
        }}
      >


        <h1
          style={{
            textAlign:"center",
            fontSize:"40px",
            fontWeight:"bold",
            color:"#1f1a17",
          }}
        >
          Checkout
        </h1>


        <p
          style={{
            textAlign:"center",
            color:"#666",
            marginBottom:"40px",
          }}
        >
          Complete your order and receive your honey 🍯
        </p>



        {/* Customer Details */}

        <h2
          style={{
            fontSize:"24px",
            fontWeight:"bold",
            marginBottom:"20px",
            color:"black"
          }}
        >
          Customer Information
        </h2>


        <input
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={inputStyle}
        />


        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          style={inputStyle}
        />


        <textarea
          placeholder="Delivery Address"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
          rows={4}
          style={inputStyle}
        />




        {/* Order Summary */}

        <div
          style={{
            marginTop:"40px",
            borderTop:"1px solid #ddd",
            paddingTop:"25px",
          }}
        >

          <h2
            style={{
              fontSize:"24px",
              fontWeight:"bold",
              color:"black",
            }}
          >
            Order Summary
          </h2>


          {cart.map((item)=>(

            <div
              key={item.name}
              style={{
                display:"flex",
                justifyContent:"space-between",
                marginTop:"15px",
              }}
            >

              <span>
                {item.name} × {item.quantity}
              </span>


              <strong>
                ₦{(item.price * item.quantity).toLocaleString()}
              </strong>

            </div>

          ))}



          <h2
            style={{
              marginTop:"30px",
              fontSize:"28px",
              fontWeight:"bold",
              color:"#d4a017",
            }}
          >
            Total: ₦{total.toLocaleString()}
          </h2>


        </div>



        <button
          onClick={sendOrder}
          style={{
            width:"100%",
            marginTop:"35px",
            background:"#25D366",
            color:"white",
            padding:"18px",
            border:"none",
            borderRadius:"15px",
            fontSize:"18px",
            fontWeight:"bold",
            cursor:"pointer",
          }}
        >

          {loading
            ? "Preparing WhatsApp Order..."
            : "📲 Order on WhatsApp"
          }

        </button>



        <Link
          href="/"
          style={{
            display:"block",
            textAlign:"center",
            marginTop:"25px",
            color:"#d4a017",
            fontWeight:"bold",
          }}
        >
          ← Continue Shopping
        </Link>


      </div>


    </main>

  );
}



const inputStyle = {

  width:"100%",
  padding:"16px",
  marginBottom:"15px",
  borderRadius:"12px",
  border:"1px solid #ddd",
  fontSize:"16px",
  color:"#1f1a17",

};