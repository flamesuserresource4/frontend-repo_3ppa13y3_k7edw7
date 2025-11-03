import { MapPin, Star, Clock, CheckCircle2, Phone } from "lucide-react";

const mockCenters = [
  {
    id: 1,
    name: "Green Baize Arena",
    location: "Koramangala, Bengaluru",
    rating: 4.8,
    pricePerHour: 350,
    tables: 8,
    phone: "+91 98765 43210",
    amenities: ["AC", "Coaching", "Snacks"],
    image:
      "https://images.unsplash.com/photo-1533565198473-3b3f7e3c1a76?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Cue Masters Club",
    location: "Andheri West, Mumbai",
    rating: 4.6,
    pricePerHour: 400,
    tables: 10,
    phone: "+91 99876 54321",
    amenities: ["AC", "Pro Tables", "Cafe"],
    image:
      "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Royal Break Snooker",
    location: "Banjara Hills, Hyderabad",
    rating: 4.3,
    pricePerHour: 300,
    tables: 6,
    phone: "+91 91234 56780",
    amenities: ["Coaching", "Locker", "Drinks"],
    image:
      "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Break Point Lounge",
    location: "Sector 18, Noida",
    rating: 4.9,
    pricePerHour: 450,
    tables: 12,
    phone: "+91 90123 45678",
    amenities: ["Tournaments", "Cafe", "AC"],
    image:
      "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?q=80&w=1600&auto=format&fit=crop",
  },
];

function CenterCard({ center }) {
  return (
    <div className="group rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video overflow-hidden">
        <img
          src={center.image}
          alt={center.name}
          className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{center.name}</h3>
            <div className="mt-1 flex items-center gap-1 text-sm text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>{center.location}</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-50 text-amber-700 text-sm">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            {center.rating}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-600">
          <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50 border">
            <Clock className="h-4 w-4" />
            {center.tables} tables
          </div>
          {center.amenities.map((a) => (
            <div
              key={a}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100"
            >
              <CheckCircle2 className="h-4 w-4" />
              {a}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-gray-900">
            <span className="text-xl font-bold">₹{center.pricePerHour}</span>
            <span className="text-sm text-gray-500">/hr</span>
          </div>
          <a
            href={`tel:${center.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700"
          >
            <Phone className="h-4 w-4" />
            Call to book
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CentersGrid({ filters }) {
  const filtered = mockCenters.filter((c) => {
    const matchesLocation = filters?.location
      ? c.location.toLowerCase().includes(filters.location.toLowerCase()) ||
        c.name.toLowerCase().includes(filters.location.toLowerCase())
      : true;
    const matchesPrice =
      typeof filters?.maxPrice === "number" ? c.pricePerHour <= filters.maxPrice : true;
    const matchesRating =
      typeof filters?.minRating === "number" ? c.rating >= filters.minRating : true;
    return matchesLocation && matchesPrice && matchesRating;
  });

  return (
    <section id="centers" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured centers</h2>
            <p className="text-gray-600">Handpicked places with great tables, lighting and vibes.</p>
          </div>
          <div className="text-sm text-gray-600 hidden sm:block">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((center) => (
            <CenterCard key={center.id} center={center} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="mt-8 rounded-lg border bg-white p-6 text-center text-gray-600">
            No centers match your filters. Try adjusting your search.
          </div>
        )}
      </div>
    </section>
  );
}
