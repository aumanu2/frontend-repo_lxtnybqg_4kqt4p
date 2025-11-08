import Hero from '../components/Hero';

export default function HomePage() {
  return (
    <main className="text-white">
      <Hero />
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">About Frost & Bloom</h2>
            <p className="mt-3 text-white/80">
              We whirl flavors with love. Our small-batch recipes lean on real fruit, fair-trade cocoa, and dairy from local farms. Expect bold colors, creamy textures, and joyful scoops.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <ul className="grid sm:grid-cols-2 gap-4 text-sm">
              <li className="bg-white/5 rounded-xl p-4">Real ingredients</li>
              <li className="bg-white/5 rounded-xl p-4">Small batch</li>
              <li className="bg-white/5 rounded-xl p-4">Seasonal flavors</li>
              <li className="bg-white/5 rounded-xl p-4">Vegan options</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
