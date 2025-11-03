import { ChevronRight, Star } from "lucide-react";

export default function Hero() {
  const scrollToCenters = () => {
    const el = document.getElementById("centers");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border text-xs text-gray-600">
            <Star className="h-3.5 w-3.5 text-amber-500" />
            India’s snooker center marketplace
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Discover and book snooker centers near you
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-prose">
            Compare ratings, amenities, and prices across top snooker and pool centers. Reserve your table in seconds.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={scrollToCenters} className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 font-medium shadow-sm">
              Explore centers
              <ChevronRight className="h-4 w-4" />
            </button>
            <a href="#partners" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-50 font-medium">
              List your center
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl bg-white/70 shadow-lg border overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542126088-4c6b0aeeae2b?q=80&w=1600&auto=format&fit=crop"
              alt="Snooker tables"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white border shadow-md rounded-lg px-4 py-3 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-emerald-600 text-white grid place-items-center font-bold">4.8</div>
            <div className="text-sm">
              <p className="font-semibold">Top rated centers</p>
              <p className="text-gray-500">Curated by real players</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
