"use client";
import { useEffect, useState } from "react";

type DestinationType = {
  category: string;
  name: string;
  image: string;
  short_description: string;
  location: string;
  google_map: string;
};

export default function AllDestinationsPage() {
  const [data, setData] = useState<DestinationType[]>([]);
  const [filteredData, setFilteredData] = useState<DestinationType[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Beaches", "Hills", "Forests", "Historical", "Rivers", "Islands", "Tea Gardens"];

  useEffect(() => {
    // Fetch all destinations from your backend endpoint
    fetch("http://localhost:5000/api/destinations")
      .then((res) => res.json())
      .then((json) => {
        // Flatten all categories into a single array
        const allDestinations: DestinationType[] = [];

        Object.keys(json).forEach((key) => {
          const categoryData = json[key];
          if (Array.isArray(categoryData)) {
            categoryData.forEach((item) => {
              allDestinations.push({ ...item, category: key });
            });
          }
        });

        setData(allDestinations);
        setFilteredData(allDestinations);
      })
      .catch((err) => console.error(err));
  }, []);

  // Filter destinations by category
  useEffect(() => {
    let filtered = data;
    if (activeCategory !== "All") {
      filtered = filtered.filter((d) => d.category.toLowerCase() === activeCategory.toLowerCase());
    }
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(
        (d) =>
          d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredData(filtered);
  }, [activeCategory, searchQuery, data]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">All Destinations</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or location..."
          className="input input-bordered w-full md:w-1/2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn btn-sm ${activeCategory === cat ? "btn-primary" : "btn-outline"}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredData.map((item, idx) => (
          <div key={idx} className="card bg-base-100 shadow hover:shadow-lg transition">
            <figure>
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.short_description}</p>
              <p className="text-sm text-gray-600">{item.location}</p>
              <p className="badge badge-outline">{item.category}</p>
              <a
                href={item.google_map}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2"
              >
                View Map
              </a>
            </div>
          </div>
        ))}
        {filteredData.length === 0 && <p>No destinations found.</p>}
      </div>
    </div>
  );
}
