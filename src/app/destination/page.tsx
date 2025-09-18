"use client";
import Link from "next/link";
import { useState } from "react";

export default function Destination() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🌅 Hero Banner */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdruKZVyjlr3KzA3XOJuSo37sIt6_Mm9tNkQ&s')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/0" /> {/* overlay */}
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Bangladesh
          </h1>
          <p className="mb-6 text-lg md:text-xl">
            Find stunning beaches, hills, forests and more.
          </p>

          {/* 🔎 Search Bar (optional filtering logic) */}
          <div className="flex items-center max-w-md mx-auto bg-white rounded-full overflow-hidden shadow">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by category, name or location..."
              className="flex-1 px-4 py-2 text-gray-700 outline-none"
            />
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* 🗺️ Category Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* <h2 className="text-2xl font-bold mb-8 text-center">
          Browse by Category
        </h2> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* --- Category Cards --- */}
          {categories
            .filter((c) =>
              search
                ? c.title.toLowerCase().includes(search.toLowerCase())
                : true
            )
            .map((c) => (
              <div
                key={c.title}
                className="card bg-base-100 image-full shadow hover:scale-105 hover:shadow-lg transition-transform"
              >
                <figure>
                  <img src={c.image} alt={c.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title flex items-center gap-2">
                    {c.icon} {c.title}
                  </h2>
                  <p>{c.description}</p>
                  <div className="card-actions justify-end">
                    <Link href={c.link} className="btn btn-primary">
                      See more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

/* ✅ Category Data */
const categories = [
  {
    title: "Sea Beaches",
    icon: "🌊",
    link: "/destination/SeaBeach",
    image:
      "https://i0.wp.com/blog.onevasco.com/wp-content/uploads/Laboni-Beach.jpg?resize=1999%2C1333&ssl=1",
    description:
      "Relax and unwind on the serene, sun-kissed beaches of Bangladesh!",
  },
  {
    title: "Mountain & Hill Stations",
    icon: "⛰️",
    link: "/destination/Hilltop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxfW5SmXXa_dZ2uJSfL5s9RIbBUkPHIHW8J2nSLakEQvyzgZscDVJGwwmxebZ6dL5OUY&usqp=CAU",
    description:
      "Discover the breathtaking beauty of Bangladesh’s majestic mountains!",
  },
  {
    title: "Historical Areas",
    icon: "🏛️",
    link: "/destination/Historical",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAWxVDZ04RlZqfyzINFwbTcm7_vQlrwJe5Ag&s",
    description:
      "Step back in time and explore magnificent historical landmarks!",
  },
  {
    title: "Forest Areas",
    icon: "🌳",
    link: "/destination/Jungle",
    image: "https://cdn.britannica.com/21/120921-050-31A953A9/trees-Sundarbans.jpg",
    description:
      "Embark on a thrilling journey through lush forests and mangroves!",
  },
  {
    title: "Islands",
    icon: "🏝️",
    link: "/destination/Islands",
    image:
      "https://thumbs.dreamstime.com/b/boat-tropical-beach-5129701.jpg",
    description:
      "Explore beautiful islands with crystal-clear waters and unique wildlife!",
  },
  {
    title: "Rivers & Lakes",
    icon: "🚤",
    link: "/destination/RiversLakes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubejBw14KAQxV-qMgqwU16l5mbeOG76QpxA&s",
    description:
      "Discover serene rivers and lakes, perfect for boating and nature tours!",
  },
  {
    title: "Tea Gardens & Valleys",
    icon: "🍃",
    link: "/destination/TeaGardens",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsH9HSgFl1FeVhkruAaU5WKnSSL-C9JilBw&s",
    description:
      "Experience the lush tea gardens and scenic valleys of Srimangal and Sylhet!",
  },
];
