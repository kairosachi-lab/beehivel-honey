"use client";

import Link from "next/link";
import { useCart } from "../content/CartContext";

export default function Cart() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();


  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  if (!isCartOpen) return null;


  return (
    <>
      {/* Background overlay */}
      <div
        onClick={() => setIsCartOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          zIndex: 1500,
        }}
      />


      {/* Cart Drawer */}
      <div
        className="cart-container"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "420px",
          maxWidth: "100%",
          height: "100vh",
          background: "#fff8e7",
          color: "#1f1a17",
          padding: "25px",
          zIndex: 2000,
          boxShadow: "-10px 0 30px rgba(0,0,0,0.2)",
          overflowY: "auto",
        }}
      >


        {/* Header */}
        <div
          style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            marginBottom:"25px",
          }}
        >

          <h2
            style={{
              fontSize:"26px",
              fontWeight:"bold",
            }}
          >
            🛒 Your Cart
          </h2>


          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              border:"none",
              background:"transparent",
              fontSize:"25px",
              cursor:"pointer",
            }}
          >
            ✕
          </button>

        </div>



        {cart.length === 0 ? (

          <div
            style={{
              textAlign:"center",
              marginTop:"80px",
            }}
          >

            <h3>Your cart is empty</h3>

            <p>
              Add some delicious Beehivel Honey 🍯
            </p>

          </div>


        ) : (

          <>

          {cart.map((item)=>(

            <div
              key={item.name}
              style={{
                display:"flex",
                gap:"15px",
                paddingBottom:"20px",
                marginBottom:"20px",
                borderBottom:"1px solid #ddd",
              }}
            >


              {/* Product Image */}

              <img
                src={item.image}
                alt={item.name}
                style={{
                  width:"80px",
                  height:"80px",
                  objectFit:"contain",
                  background:"#fff",
                  borderRadius:"15px",
                  padding:"5px",
                }}
              />


              <div
                style={{
                  flex:1,
                }}
              >


                <h3
                  style={{
                    fontWeight:"bold",
                    fontSize:"17px",
                  }}
                >
                  {item.name}
                </h3>


                <p
                  style={{
                    color:"#d4a017",
                    fontWeight:"bold",
                  }}
                >
                  ₦{item.price.toLocaleString()}
                </p>



                {/* Quantity */}

                <div
                  style={{
                    display:"flex",
                    alignItems:"center",
                    gap:"12px",
                    marginTop:"10px",
                  }}
                >

                  <button
                    onClick={()=>decreaseQuantity(item.name)}
                    style={{
                      width:"35px",
                      height:"35px",
                      borderRadius:"50%",
                      border:"none",
                      cursor:"pointer",
                    }}
                  >
                    −
                  </button>


                  <strong>
                    {item.quantity}
                  </strong>


                  <button
                    onClick={()=>increaseQuantity(item.name)}
                    style={{
                      width:"35px",
                      height:"35px",
                      borderRadius:"50%",
                      border:"none",
                      cursor:"pointer",
                    }}
                  >
                    +
                  </button>

                </div>


                <button
                  onClick={()=>removeItem(item.name)}
                  style={{
                    marginTop:"10px",
                    background:"#dc2626",
                    color:"white",
                    border:"none",
                    padding:"7px 12px",
                    borderRadius:"8px",
                    cursor:"pointer",
                  }}
                >
                  Remove
                </button>


              </div>


            </div>

          ))}



          {/* Total */}

          <div
            style={{
              borderTop:"2px solid #ddd",
              paddingTop:"20px",
            }}
          >

            <h2
              style={{
                fontSize:"22px",
                fontWeight:"bold",
              }}
            >
              Total:
              <span style={{color:"#d4a017"}}>
                {" "}₦{total.toLocaleString()}
              </span>
            </h2>



            <Link href="/checkout">

              <button
                style={{
                  width:"100%",
                  marginTop:"20px",
                  background:"#1f1a17",
                  color:"white",
                  padding:"16px",
                  border:"none",
                  borderRadius:"15px",
                  fontSize:"18px",
                  fontWeight:"bold",
                  cursor:"pointer",
                }}
              >
                Proceed to Checkout →
              </button>

            </Link>


          </div>


          </>

        )}

      </div>

    </>
  );
}