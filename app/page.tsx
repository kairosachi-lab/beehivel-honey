import WhyChoose from "../components/WhyChooseus";
import Navbar from "../components/navbar";
import ProductCard from "../components/productcard";
import Cart from "../components/Cart";
import Hero from "../components/Hero";
import About from "../components/about";
import Footer from "../components/footer";
import { products } from "../data/product";


export default function Home() {
  return (
    <>
      <Navbar />

      <Cart />

      <Hero />


      <main>

        <div
          id="products"
         style={{
  display: "flex",
  gap: "30px",
  marginTop: "60px",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "stretch",
  width: "100%",
  maxWidth: "1200px",
  padding: "0 20px",
  color: "black",
}}
        >

         {products.map((product)=>(
  <ProductCard
    key={product.id}
    name={product.name}
    price={`₦${product.price.toLocaleString()}`}
    image={product.image}
  />
))}

        </div>


        <About />


        <WhyChoose />


      </main>


      <Footer />

    </>
  );
}