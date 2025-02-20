import { Link } from "react-router";
import Masonry from 'react-layout-masonry';

import StarIcon from "@mui/icons-material/Star";

import type { MetaData, TestimonialsData } from "~/utils/constants";
import { metaData, testimonialsData } from "~/utils/constants";

import type { Route } from "./+types/testimonials";

export function meta({}: Route.MetaArgs): MetaData | object {
  return [
    { title: `Testimonials | Kitchen Gurus` },
    { name: `description`, content: `Kitchen Gurus Testimonials` },
    {
      name: `keywords`,
      content: `kitchen remodeling reviews, best kitchen remodeling contractors, best kitchen renovation contractor, best kitchen company, highly rated kitchen remodeling, top kitchen remodeling, quality kitchen renovations, best kitchen upgrades, best kitchen transformations, best kitchen remodeling ${new Date().getFullYear()}, top kitchen remodelers ${new Date().getFullYear()}, 5 star kitchen contractors`
    },
    { name: `og:title`, content: `Testimonials | Kitchen Gurus` },
    { name: `og:description`, content: `5 Star Reviews! Our customers trust us to exceed their expectations for their kitchen remodeling needs` },
    ...metaData
  ];
}

export default function Testimonials() {
  return (
    <article className="font-['Open_Sans']">
      <h1 className="text-center text-4xl font-semibold p-6">
        Testimonials
      </h1>
      <section className="flex flex-col items-center">
        <h2 className="text-lg text-center px-6">
          Check out our
          <Link
            className="text-[#F98500]"
            target="_blank"
            to="https://www.google.com/search?q=basement+gurus+&client=firefox-b-1-d&sca_esv=72c36497884f1b5a&sxsrf=AHTn8zq0HsH02cLQHJjDYZi6DJzVMMFwVg%3A1739931461067&ei=RT-1Z5jlA_mu5NoPluyj8As&ved=0ahUKEwjYm67l1c6LAxV5F1kFHRb2CL4Q4dUDCBA&uact=5&oq=basement+gurus+&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2Jhc2VtZW50IGd1cnVzIDIEECMYJzIEECMYJzIOEC4YgAQYxwEYjgUYrwEyBRAAGIAEMhAQLhiABBhDGMcBGIoFGK8BMgUQABiABDIKEAAYgAQYQxiKBTIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeSKoFUPsCWPsCcAJ4AZABAJgBnwGgAZ8BqgEDMC4xuAEDyAEA-AEBmAIDoALBAcICChAAGLADGNYEGEfCAg0QABiwAxjWBBhHGMkDmAMAiAYBkAYIkgcDMi4xoAfuDQ&sclient=gws-wiz-serp#lrd=0x89c6b1d00267f5b7:0xc3c464130b250006,1,,,,"
          >
            {` Google `}
          </Link>
          and
          <Link className="text-[#F98500]" target="_blank" to="https://www.homeadvisor.com/rated.BasementGurus.97478986.html">
            {` Home Advisor `}
          </Link>
          5-star Reviews!
        </h2>
      </section>
      <section className="mx-6 mt-4 mb-0">
        <Masonry columns={{ 480: 1, 640: 2, 768: 2, 1024: 3 }} gap={12}>
          {testimonialsData.map((data: TestimonialsData, index: number) => (
            <div key={index} className="bg-[#51A655] text-white text-center p-4 size-fit">
              <header className="pb-5 text-center">
                {Array.from({ length: 5 }).map((_, index: number) => (
                  <StarIcon key={index} className="m-auto inline-block text-[#F7C400]" fontSize="large" />
                ))}
              </header>
              <p>{data.testimonial}</p>
              <span>
                <p className="font-black pt-12">{data.name}</p>
                <p>{data?.location}</p>
              </span>
            </div>
          ))}
        </Masonry>
      </section>
    </article>
  );
}
