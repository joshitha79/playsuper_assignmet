"use client";
import Link from "next/link";
import { PlaneTakeoff } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl">
          <nav className="flex items-center justify-between h-20 px-8">
            <Link
              href="/"
              className="flex items-center gap-3 text-2xl font-bold text-white transition-transform hover:scale-105"
            >
              <PlaneTakeoff className="text-blue-400" />
              <span>FlyRoute</span>
            </Link>
            <div className="flex items-center gap-8 text-lg font-medium">
              <Link
                href="#find-flight"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Find Connection
              </Link>
              <Link
                href="#contact"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/admin/login"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Admin
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
