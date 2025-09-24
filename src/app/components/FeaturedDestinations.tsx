"use client";
import { useEffect, useState } from "react";

type Destination = {
  name: string;
  image: string;
  short_description: string;
  location: string;
};

export default function FeaturedDestinations() {
  const [data, setData] = useState<Destination[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/destinations") // Replace with your real endpoint
      .then((res) => res.json())
      .then((json) => {
        const list = Array.isArray(json) ? json.slice(0, 6) : [];
        setData(list);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, idx) => (
          <div key={idx} className="card bg-base-100 shadow-md">
            <figure>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <p>{item.short_description}</p>
              <p className="text-sm text-gray-600 mt-2">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
