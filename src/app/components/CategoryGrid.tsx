import Link from "next/link";

const categories = [
  {
    name: "Sea Beaches",
    image:
      "https://i0.wp.com/blog.onevasco.com/wp-content/uploads/Laboni-Beach.jpg?resize=1999%2C1333&ssl=1",
    href: "/destination/SeaBeach",
    icon: "🌊",
  },
  {
    name: "Hilltops",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxfW5SmXXa_dZ2uJSfL5s9RIbBUkPHIHW8J2nSLakEQvyzgZscDVJGwwmxebZ6dL5OUY&usqp=CAU",
    href: "/destination/Hilltop",
    icon: "⛰️",
  },
  {
    name: "Historical",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAWxVDZ04RlZqfyzINFwbTcm7_vQlrwJe5Ag&s",
    href: "/destination/Historical",
    icon: "🏛️",
  },
  {
    name: "Jungle",
    image: "https://cdn.britannica.com/21/120921-050-31A953A9/trees-Sundarbans.jpg",
    href: "/destination/Jungle",
    icon: "🌳",
  },
  {
    name: "Rivers & Lakes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubejBw14KAQxV-qMgqwU16l5mbeOG76QpxA&s",
    href: "/destination/RiversLakes",
    icon: "💧",
  },
  {
    name: "Tea Gardens",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsH9HSgFl1FeVhkruAaU5WKnSSL-C9JilBw&s",
    href: "/destination/TeaGardens",
    icon: "🍃",
  },
  {
    name: "Islands",
    image: "https://thumbs.dreamstime.com/b/boat-tropical-beach-5129701.jpg",
    href: "/destination/Islands",
    icon: "🏝️",
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Explore by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <Link key={idx} href={cat.href}>
            <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4">
                <span className="text-4xl mb-2">{cat.icon}</span>
                <h3 className="text-xl font-semibold">{cat.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
