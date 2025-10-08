import React from "react";

export default function About(){
  return (
    <section id="about" className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">About</h2>
        <p className="mt-4 text-gray-600 max-w-3xl">
          Leonardo DiCaprio is an Academy Award-winning actor and environmental activist. 
          Rising to fame with Titanic, he has since starred in films like Inception, 
          The Wolf of Wall Street, and The Revenant. He is also dedicated to global 
          conservation through the Leonardo DiCaprio Foundation.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="font-semibold">Career</h3>
            <p className="mt-2 text-sm text-gray-600">Over 30 years of acting with collaborations with directors like Scorsese, Nolan, and Tarantino.</p>
          </div>
          <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="font-semibold">Philanthropy</h3>
            <p className="mt-2 text-sm text-gray-600">Environmental advocacy and large-scale donations to protect oceans, forests, and endangered species.</p>
          </div>
          <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="font-semibold">Awards</h3>
            <p className="mt-2 text-sm text-gray-600">Multiple Golden Globes, BAFTAs, and an Academy Award for The Revenant (2016).</p>
          </div>
        </div>
      </div>
    </section>
  );
}
