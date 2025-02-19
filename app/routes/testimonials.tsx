import StarIcon from "@mui/icons-material/Star";

import type { TestimonialsData } from "~/utils/constants";
import { testimonialsData } from "~/utils/constants";

export default function Testimonials() {
  return (
    <section className="font-['Open_Sans']">
      <h1 className="text-center text-4xl font-semibold p-6">
        Testimonials
      </h1>
      <section>
        <h2 className="flex justify-center text-lg text-center px-6">
          Check out our Google and Home Advisor 5-star Reviews!
        </h2>
        <div className="mt-4 px-6 grid gap-2.5 grid-cols-[repeat(auto-fit,minmax(min(350px,100%),1fr))] grid-rows-[masonry]">
          {testimonialsData.map((data: TestimonialsData, index: number) => (
            <div key={index} className="bg-[#51A655] text-white text-center p-4 size-fit">
              <header className="pb-5 text-center">
                {Array.from({ length: 5 }).map((_, index: number) => (
                  <StarIcon key={index} className="m-auto inline-block text-[#F7C400]" fontSize="large" />
                ))}
              </header>
              <div className="">
                <p>{data.testimonial}</p>
                <span>
                  <p className="font-black pt-12">{data.name}</p>
                  <p>{data?.location}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
