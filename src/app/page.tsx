// import Image from "next/image";
import "./globals.css";
// import HolidayCalendar from "./HolidayCalendar/page";

// export default function Home() {
//   return (
//     <div>
//       home
//       <HolidayCalendar/>
//     </div>
//   );
// }




// "use client";
// import Hero from "./components/Hero";
// import CategoryGrid from "./components/CategoryGrid";
// import FeaturedDestinations from "./components/FeaturedDestinations";
// import HolidayCalendar from "./components/HolidayCalendar";

// export default function Home() {
//   return (
//     <main>
//       <Hero />
//       <CategoryGrid />
//       <FeaturedDestinations />
//       {/* ✅ NEW Calendar Section */}
//       <HolidayCalendar />

//       {/* Call to Action */}
//       <section className="bg-green-700 text-white py-12 text-center">
//         <h2 className="text-3xl font-bold mb-4">Start your adventure today!</h2>
//         <p className="mb-6">
//           Discover breathtaking destinations across Bangladesh.
//         </p>
//         <a
//           href="/destination"
//           className="btn btn-primary bg-white text-green-700 hover:bg-gray-100"
//         >
//           Explore Destinations
//         </a>
//       </section>

//       <footer className="bg-gray-900 text-white text-center py-6">
//         <p>© 2025 Explore Bangladesh. All rights reserved.</p>
//       </footer>
//     </main>
//   );
// }




//"use client";

import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import FeaturedDestinations from "./components/FeaturedDestinations";
import HolidayCalendar from "./components/HolidayCalendar";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryGrid />
      <FeaturedDestinations />
      <HolidayCalendar />

      <section className="bg-green-700 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Start your adventure today!</h2>
        <p className="mb-6">Discover breathtaking destinations across Bangladesh.</p>
        <a
          href="/destination"
          className="btn btn-primary bg-white text-green-700 hover:bg-gray-100"
        >
          Explore Destinations
        </a>
      </section>

      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2025 Explore Bangladesh. All rights reserved.</p>
      </footer>
    </main>
  );
}
