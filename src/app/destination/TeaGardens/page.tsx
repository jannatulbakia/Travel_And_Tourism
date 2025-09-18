"use client";
import { useEffect, useState } from "react";

type TeaGardenType = {
  name: string;
  image: string;
  short_description: string;
  location: string;
  google_map: string;
};

export default function TeaGardens() {
  const [data, setData] = useState<TeaGardenType[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/teagardens") // ✅ Your backend Tea Gardens API
      .then((res) => res.json())
      .then((json) => {
        const gardens = Array.isArray(json)
          ? json
          : Array.isArray(json.tea_gardens_valleys_destinations)
          ? json.tea_gardens_valleys_destinations
          : [];
        setData(gardens);
      })
      .catch((err) => console.error(err));
  }, []);

   return (
    <div className="min-h-screen bg-gray-50">
      <section
        className="relative h-[40vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsH9HSgFl1FeVhkruAaU5WKnSSL-C9JilBw&s')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl font-bold mb-2">Tea Gardens & Valleys</h1>
          <p className="text-lg md:text-xl">Experience the lush tea gardens of Srimangal & Sylhet!</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item, idx) => (
            <div key={idx} className="card bg-base-100 shadow hover:shadow-lg transition">
              <figure>
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.short_description}</p>
                <p className="text-sm text-gray-600">{item.location}</p>
                <a href={item.google_map} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">
                  View Map
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
