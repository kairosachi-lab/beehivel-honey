"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-amber-50 to-yellow-100 py-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-12">

        {/* Left Side */}
        <div>

          <span className="bg-yellow-500 text-white px-5 py-2 rounded-full font-semibold inline-block">
            🍯 100% Pure Honey
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-6 leading-tight">
            Nature's Sweetest Gift
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mt-6 leading-8">
            Carefully harvested from trusted beekeepers.
            No additives. No preservatives.
            Just pure natural goodness for you and your family.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">

            <button
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition"
            >
              🛒 Shop Now
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-yellow-500 text-yellow-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 hover:text-white transition"
            >
              Learn More
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <Image
            src="/images/big-honey.jpg"
            alt="Beehivel Honey"
            width={450}
            height={600}
            className="drop-shadow-2xl w-72 md:w-96 lg:w-[450px] h-auto"
            priority
          />

        </div>

      </div>
    </section>
  );
}