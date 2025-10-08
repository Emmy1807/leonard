import React from "react";

export default function Hero(){
  return (
    <section id="home" className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">Leonardo DiCaprio</h1>
        <p className="mt-4 text-gray-600">Academy Award-winning actor, producer, and environmental activist.</p>
        <div className="mt-6 flex gap-3">
          <a href="#about" className="px-4 py-2 bg-gray-800 text-white rounded">Learn More</a>
          <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded">Contact / Booking</a>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-gray-600">
          <li><strong>Born:</strong> November 11, 1974</li>
          <li><strong>Notable:</strong> Oscar winner, environmental advocate</li>
          <li><strong>Representative Films:</strong> Titanic, Inception, The Revenant</li>
          <li><strong>Location:</strong> Public figure (info only)</li>
        </ul>
      </div>

      <div className="relative">
        <div className="w-full h-80 md:h-96 rounded-xl bg-gray-200 overflow-hidden flex items-center justify-center">
          <span className="text-gray-500">[<img src="/public/images/leo01.jpeg" alt="" />]</span>
        </div>
        <div className="mt-4 text-xs text-gray-500">Image credits go here.</div>
      </div>
    </section>
  );
}
