export default function WhyChoose() {
  const features = [
    {
      emoji: "🍯",
      title: "100% Pure", color:"black",
      text: "No additives, preservatives or artificial sweeteners.",
      
    },
    {
      emoji: "🌿",
      title: "Natural", color:"black",
      text: "Harvested directly from trusted beekeepers.",

    },
    {
      emoji: "🚚",
      title: "Fast Delivery",
      text: "Fresh honey delivered quickly across Nigeria.",
    },
    {
      emoji: "❤️",
      title: "Trusted Quality", color:"black",
      text: "Loved by families who want real natural honey.",
    },
  ];

  return (
    <section className="py-24 bg-amber-50" id="why">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-amber-700">
          Why Choose Beehivel?
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14 text-lg">
          Pure honey you can trust, straight from nature.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition duration-300"
            >

              <div className="text-5xl mb-5">
                {feature.emoji}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}