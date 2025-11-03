import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchFilters from "./components/SearchFilters";
import CentersGrid from "./components/CentersGrid";

function App() {
  const [filters, setFilters] = useState({});

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main>
        <Hero />
        <SearchFilters onSearch={setFilters} />
        <CentersGrid filters={filters} />

        {/* How it works */}
        <section id="how" className="py-16 border-t bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">How it works</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl border bg-white p-6">
                <div className="h-10 w-10 rounded-md bg-emerald-100 text-emerald-700 grid place-items-center font-bold">1</div>
                <h3 className="mt-4 font-semibold">Search centers</h3>
                <p className="mt-2 text-gray-600 text-sm">Enter your location and preferences. Browse photos, amenities, and reviews.</p>
              </div>
              <div className="rounded-xl border bg-white p-6">
                <div className="h-10 w-10 rounded-md bg-emerald-100 text-emerald-700 grid place-items-center font-bold">2</div>
                <h3 className="mt-4 font-semibold">Compare & choose</h3>
                <p className="mt-2 text-gray-600 text-sm">Check ratings and pricing. Pick a center that fits your vibe and budget.</p>
              </div>
              <div className="rounded-xl border bg-white p-6">
                <div className="h-10 w-10 rounded-md bg-emerald-100 text-emerald-700 grid place-items-center font-bold">3</div>
                <h3 className="mt-4 font-semibold">Book instantly</h3>
                <p className="mt-2 text-gray-600 text-sm">Call to confirm availability or use instant booking when available.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners section */}
        <section id="partners" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border bg-gradient-to-br from-emerald-50 to-blue-50 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Own a snooker center?</h2>
              <p className="mt-3 text-gray-700 max-w-2xl">
                Join SnookerDekho to reach thousands of players. Showcase your tables, manage availability, and grow your business.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 font-medium shadow-sm"
                >
                  Become a partner
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} SnookerDekho. All rights reserved.
          </p>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
