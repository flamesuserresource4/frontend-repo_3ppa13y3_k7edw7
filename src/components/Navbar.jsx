import { Menu, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-md bg-emerald-600 grid place-items-center text-white font-bold">
            SD
          </div>
          <span className="text-lg font-semibold tracking-tight group-hover:text-emerald-700 transition-colors">
            SnookerDekho
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#centers" className="hover:text-gray-900 transition-colors">Explore</a>
          <a href="#how" className="hover:text-gray-900 transition-colors">How it works</a>
          <a href="#partners" className="hover:text-gray-900 transition-colors">Partners</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
            <Search className="h-4 w-4" />
            Search
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-gray-200 hover:border-gray-300">
            <User className="h-4 w-4" />
            Sign in
          </button>
          <button className="inline-flex md:hidden items-center p-2 rounded-md hover:bg-gray-100">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
