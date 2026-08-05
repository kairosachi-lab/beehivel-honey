import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white py-24" id="about">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div className="flex justify-center">
          <Image
            src="/images/big-honey.jpg"
            alt="Beehivel Honey"
            width={380}
            height={500}
            className="rounded-3xl shadow-2xl"
          />
        </div>

        <div>

          <span className="text-yellow-600 font-bold uppercase tracking-widest">
            Our Story
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-6 text-gray-900">
            Pure Honey From Nature
          </h2>

          <p className="text-gray-600 text-lg leading-8 mb-6">
            At Beehivel, we believe every family deserves genuine,
            natural honey. Our honey is carefully harvested from
            trusted beekeepers without additives, preservatives,
            or artificial sweeteners.
          </p>

          <p className="text-gray-600 text-lg leading-8 mb-8">
            Every bottle is packed with care to give you the rich
            taste and natural goodness that only pure honey can
            provide. Whether you enjoy it with tea, bread,
            smoothies or traditional meals, Beehivel Honey is a
            healthy choice you can trust.
          </p>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-amber-50 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-yellow-600">
                100%
              </h3>
              <p>Pure Raw Honey</p>
            </div>

            <div className="bg-amber-50 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-yellow-600">
                Fresh
              </h3>
              <p>Directly Harvested</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}