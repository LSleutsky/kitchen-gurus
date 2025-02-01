import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { getImageParameters } from "~/utils";

import Reviews from "./Reviews";

export default function Banner() {
  const [bannerImageUrl, setBannerImageUrl] = useState<string>(``);
  const location = useLocation();

  useEffect(() => {
    const random = Math.floor(Math.random() * 4);

    const bannerImages = [
      { id: 1, slug: `abfb8500-2160-4798-ba8f-11e6bf606870` },
      { id: 2, slug: `6d99280e-439d-40ab-9513-142d9aa0b6e0` },
      { id: 3, slug: `a1099375-2c11-4824-9c13-28b22de109cf` },
      { id: 4, slug: `79c7168d-a17f-462f-81b8-e5d53a9ba6d2` },
    ];

    const url = getImageParameters(bannerImages[random].slug);

    setBannerImageUrl(url);
  }, [location]);

  return (
    <>
      <figure
        className={`relative h-[60vh] overflow-hidden bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${bannerImageUrl})` }}
      >
        <div className="absolute size-full bg-black opacity-60 content-['']" />
        <div className="absolute right-[-24%] h-full w-7/12 skew-x-[20deg] bg-[#F98500] opacity-50 content-[''] md:right-[-12%]" />
      </figure>
      <section className="bg-[#F7F7F7] py-4">
        <h1 className="text-center font-['Open_Sans'] text-4xl font-semibold">
          A Unique Kitchen Remodeling Experience
        </h1>
        <div className="grid justify-items-center pt-8 md:grid-cols-3 [&>*]:flex [&>*]:flex-col [&>*]:pb-4 [&>*]:md:pb-2">
          <Reviews
            imgAlt="Google Reviews logo"
            imgSrc="/google-reviews.png"
            review="I was very pleased with the work Basement Gurus recently did at our home. They were very professional and even
              finished within a day! Armand and his crew did some awesome work. Josh really helped explaining everything
              clearly about how the procedure would work and the materials being used. I would highly recommend Basement Gurus
              to waterproof your basement."
            reviewer="Andrew S."
            url="https://g.co/kgs/iXh4VY6"
          />
          <Reviews
            imgAlt="Yelp Reviews logo"
            imgSrc="/yelp-reviews.png"
            review="Awesome staff and service! purchased a home recently that didn't pass inspection completely and had to get the
              columns redone and a crack repaired in the foundation. Josh was so diligent in assisting me, going above and
              beyond to help me get a credit from the sellers to pay for it. Once the work began, I experienced professionalism
              from Ms. Cassie and Ms. Boni which I cannot even put into words."
            reviewer="Miss V."
            url="https://www.yelp.com/biz/basement-gurus-philadelphia#reviews"
          />
          <Reviews
            className="pt-5"
            imgAlt="Angi Reviews logo"
            imgSrc="/angi-reviews.png"
            review="Great! We are very happy with Phil Thistle and his team at Basement Gurus. They were very professional and
              efficient. Our basement, which had been flooding with every heavy rain, is now bone dry! Their price was
              very competitive and it was a pleasure to work with their company. Highly recommend!"
            reviewer="Jamie P."
            url="https://www.angi.com/companylist/us/pa/philadelphia/basement-gurus-reviews-9964580.htm#reviews-section"
          />
        </div>
      </section>
    </>
  );
}
