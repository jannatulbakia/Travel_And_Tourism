"use client";
import { useEffect, useState } from "react";

type HilltopType = {
  name: string;
  image: string;
  short_description: string;
  location: string;
  google_map: string;
};

export default function Hilltop() {
  const [data, setData] = useState<HilltopType[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/hilltops") // ✅ Hilltop API endpoint
      .then((res) => res.json())
      .then((json) => {
        const hilltops = Array.isArray(json)
          ? json
          : Array.isArray(json.hilltop_destinations)
          ? json.hilltop_destinations
          : [];
        setData(hilltops);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <section
        className="relative h-[40vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxfW5SmXXa_dZ2uJSfL5s9RIbBUkPHIHW8J2nSLakEQvyzgZscDVJGwwmxebZ6dL5OUY&usqp=CAU')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl font-bold mb-2">Hilltop</h1>
          <p className="text-lg md:text-xl">Discover breathtaking mountains and hill stations!</p>
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
