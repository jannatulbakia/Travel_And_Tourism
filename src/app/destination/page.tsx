import Link from "next/link";
import Beach from "./Beach/page";
import Historical from "./Historical/page";
import Mountain from "./Mountain/page";


export default function destination() {
  return (
    <div className=" bg-[#D0E1F0]">
      <div className="h-200 m-5">
      <p>destination</p>
      <div className="flex flex-row justify-between">
        <div className="card bg-base-100 image-full w-96 shadow-sm">
          <figure>
            <img
              src="https://i0.wp.com/blog.onevasco.com/wp-content/uploads/Laboni-Beach.jpg?resize=1999%2C1333&ssl=1"
              alt="Beaches" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Beach</h2>
            <p>Relax and unwind on the serene, sun-kissed beaches of Bangladesh for the perfect seaside escape!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
               <Link href="destination/Beach">See more</Link></button>
            </div>
          </div>
        </div>
       
        <div className="card bg-base-100 image-full w-96 shadow-sm">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxfW5SmXXa_dZ2uJSfL5s9RIbBUkPHIHW8J2nSLakEQvyzgZscDVJGwwmxebZ6dL5OUY&usqp=CAU"
              alt="Mountain & Hills" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mountain & Hill Station Areas</h2>
            <p>Discover the breathtaking beauty of Bangladesh’s majestic mountains with an unforgettable adventure tour!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link href="destination/Mountain">See more</Link></button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 image-full w-96 shadow-sm">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAWxVDZ04RlZqfyzINFwbTcm7_vQlrwJe5Ag&s"
              alt="Historic" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Historical Areas</h2>
            <p>Step back in time and explore the timeless charm of Bangladesh’s magnificent historical landmarks!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                 <Link href="destination/Historical">See more</Link></button>
            </div>
          </div>
        </div>


      </div>
    </div>
    </div>

  );
}