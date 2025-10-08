import React from "react";

export default function Gallery(){
  return (
    <section id="gallery" className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Gallery</h2>
        <p className="mt-2 text-gray-600">A curated collection of Leonardo DiCaprio photos (placeholders here).</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            "/public/images/leo2.jpeg",
            "/public/images/leo3.jpeg",
            "/public/images/leo4.jpeg",
            "/public/images/leo5.jpeg",
            "/public/images/leo6.jpeg",
            "/public/images/leo7.jpeg",
            "/public/images/leo8.jpeg",
            "/public/images/leo9.jpeg",

          ].map((src, i) => (
            <div key={i} className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center">
              <img
                src={src}
                alt={`Photo ${i + 1}`}
                className="w-full h-full object-cover"
      />
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-gray-500"> </p>
      </div>
    </section>
  );
}
