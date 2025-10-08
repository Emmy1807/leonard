import React from "react";

export default function Navbar(){
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold">LD</div>
          <div>
            <h1 className="text-lg font-bold">Leonardo DiCaprio</h1>
            <p className="text-xs text-gray-500">Fan Page • Not Official</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#gallery" className="hover:text-blue-600">Gallery</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="px-4 py-2 rounded bg-blue-600 text-white">Booking Inquiry</a>
        </div>

        <div className="md:hidden">
          <button aria-label="menu" className="p-2 rounded-md bg-gray-100">≡</button>
        </div>
      </div>
    </header>
  );
}
