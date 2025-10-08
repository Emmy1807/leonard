import React from "react";

export default function Services(){
  return (
    <section id="services" className="border-t">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Services</h2>
        <p className="mt-3 text-gray-600">This fan site provides information on Leonardo DiCaprio’s career, projects, and conservation work.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Film & Media Info</h3>
            <p className="mt-2 text-sm text-gray-600">Highlights of DiCaprio’s career, filmography, and press coverage.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Environmental Projects</h3>
            <p className="mt-2 text-sm text-gray-600">Overview of partnerships and NGO collaborations through the Leonardo DiCaprio Foundation.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Public Speaking</h3>
            <p className="mt-2 text-sm text-gray-600">Information on his climate activism and appearances at UN summits and global events.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
