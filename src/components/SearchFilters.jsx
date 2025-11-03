import { useState } from "react";
import { MapPin, Star, IndianRupee, Search } from "lucide-react";

export default function SearchFilters({ onSearch }) {
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSearch?.({
      location: location.trim(),
      maxPrice: maxPrice ? Number(maxPrice) : null,
      minRating: minRating ? Number(minRating) : null,
    });
  };

  return (
    <section className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <form
          onSubmit={submit}
          className="grid grid-cols-1 md:grid-cols-4 gap-3 bg-white/90 backdrop-blur border rounded-xl p-4 shadow-lg"
        >
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City or area"
              className="w-full outline-none bg-transparent text-sm"
            />
          </div>
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
            <IndianRupee className="h-4 w-4 text-gray-500" />
            <input
              type="number"
              min={0}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max price/hr"
              className="w-full outline-none bg-transparent text-sm"
            />
          </div>
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
            <Star className="h-4 w-4 text-amber-500" />
            <input
              type="number"
              min={0}
              max={5}
              step={0.1}
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
              placeholder="Min rating"
              className="w-full outline-none bg-transparent text-sm"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 font-medium"
          >
            <Search className="h-4 w-4" />
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
