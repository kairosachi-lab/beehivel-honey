"use client";

import Image from "next/image";
import { useCart } from "../content/CartContext";

type ProductCardProps = {
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({
  name,
  price,
  image,
}: ProductCardProps) {

  const { addToCart } = useCart();

  return (
    <div
      className="
      group
      bg-white
      rounded-3xl
      overflow-hidden
      shadow-lg
      hover:shadow-2xl
      transition-all
      duration-300
      hover:-translate-y-2
      w-full
      max-w-sm
      "
    >

      {/* Product Image */}
      <div
        className="
        bg-gradient-to-b
        from-amber-100
        to-white
        p-8
        flex
        justify-center
        items-center
        "
      >

        <Image
          src={image}
          alt={name}
          width={260}
          height={320}
          className="
          object-contain
          transition-transform
          duration-300
          group-hover:scale-110
          "
        />

      </div>


      {/* Product Details */}
      <div className="p-6 text-center">

        <span
          className="
          inline-block
          bg-yellow-100
          text-yellow-700
          text-sm
          font-semibold
          px-4
          py-2
          rounded-full
          mb-4
          "
        >
          🍯 Pure Honey
        </span>


        <h2
          className="
          text-2xl
          font-bold
          text-gray-900
          "
        >
          {name}
        </h2>


        <p
          className="
          text-3xl
          font-extrabold
          text-yellow-600
          mt-3
          "
        >
          {price}
        </p>


        <button
          onClick={() =>
            addToCart({
              name,
              price: Number(price.replace(/[₦,]/g, "")),
              image,
            })
          }
          className="
          w-full
          mt-6
          bg-[#1f1a17]
          hover:bg-yellow-500
          text-white
          py-4
          rounded-xl
          font-semibold
          transition
          "
        >
          🛒 Add to Cart
        </button>

      </div>

    </div>
  );
}