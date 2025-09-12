import Link from "next/link";
import Beach from "./Beach/page";
import Historical from "./Historical/page";
import Mountain from "./Mountain/page";

export default function Destination() {
  return (
    <div className="m-5">
      <p className="mb-6 text-2xl font-bold">Destination</p>

      {/* Grid with 3 cards per row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Beaches & Lakes */}
        <div className="card bg-base-100 image-full shadow-sm">
          <figure>
            <img
              src="https://i0.wp.com/blog.onevasco.com/wp-content/uploads/Laboni-Beach.jpg?resize=1999%2C1333&ssl=1"
              alt="Beaches"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Beaches & Lakes</h2>
            <p>
              Relax and unwind on the serene, sun-kissed beaches of Bangladesh
              for the perfect seaside escape!
            </p>
            <div className="card-actions justify-end">
              <Link href="/destination/Beach" className="btn btn-primary">
                See more
              </Link>
            </div>
          </div>
        </div>

        {/* Mountain & Hill Station */}
        <div className="card bg-base-100 image-full shadow-sm">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxfW5SmXXa_dZ2uJSfL5s9RIbBUkPHIHW8J2nSLakEQvyzgZscDVJGwwmxebZ6dL5OUY&usqp=CAU"
              alt="Mountain & Hills"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mountain & Hill Station Areas</h2>
            <p>
              Discover the breathtaking beauty of Bangladesh’s majestic mountains
              with an unforgettable adventure tour!
            </p>
            <div className="card-actions justify-end">
              <Link href="/destination/Mountain" className="btn btn-primary">
                See more
              </Link>
            </div>
          </div>
        </div>

        {/* Historical Areas */}
        <div className="card bg-base-100 image-full shadow-sm">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAWxVDZ04RlZqfyzINFwbTcm7_vQlrwJe5Ag&s"
              alt="Historic"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Historical Areas</h2>
            <p>
              Step back in time and explore the timeless charm of Bangladesh’s
              magnificent historical landmarks!
            </p>
            <div className="card-actions justify-end">
              <Link href="/destination/Historical" className="btn btn-primary">
                See more
              </Link>
            </div>
          </div>
        </div>

        {/* Forest Areas */}
        <div className="card bg-base-100 image-full shadow-sm">
          <figure>
            <img
              src="https://cdn.britannica.com/21/120921-050-31A953A9/trees-Sundarbans.jpg"
              alt="Forest"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Forest Areas</h2>
            <p>
              Embark on a thrilling journey through Bangladesh’s lush forests and
              the mysterious mangroves of the Sundarbans!
            </p>
            <div className="card-actions justify-end">
              <Link href="/destination/Forest" className="btn btn-primary">
                See more
              </Link>
            </div>
          </div>
        </div>

        {/* Gram Bangla Areas */}
        <div className="card bg-base-100 image-full shadow-sm">
          <figure>
            <img
              src="https://preview.redd.it/hy9xuwqviah61.jpg?width=640&crop=smart&auto=webp&s=bc3f597d254fcafa6eb182d17d12ab3e88935756"
              alt="Rural"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Gram Bangla Areas</h2>
            <p>
              Experience the heart of Bangladesh with the serene beauty and
              timeless charm of rural village life!
            </p>
            <div className="card-actions justify-end">
              <Link href="/destination/Rural" className="btn btn-primary">
                See more
              </Link>
            </div>
          </div>
        </div>

        {/* Hidden Gems */}
        <div className="card bg-base-100 image-full shadow-sm">
          <figure>
            <img
              src="https://www.travelmate.com.bd/wp-content/uploads/2019/06/Muppochora-Waterfall-1024x576.jpg.webp"
              alt="Hidden Gems"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Hidden Gems</h2>
            <p>
              Uncover Bangladesh’s best-kept secrets as you explore its
              breathtaking hidden gems off the beaten path!
            </p>
            <div className="card-actions justify-end">
              <Link href="/destination/HiddenGems" className="btn btn-primary">
                See more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
