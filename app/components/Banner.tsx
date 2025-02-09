import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { getImageParameters } from "~/utils";
import type { ReviewsData } from "~/utils/constants";
import { bannerImages, reviewsData } from "~/utils/constants";

import Reviews from "./Reviews";

export default function Banner() {
  const [bannerImageUrl, setBannerImageUrl] = useState<string>(``);
  const location = useLocation();
  const isOtherServicesPath = location.pathname.includes(`services`);

  useEffect(() => {
    const random = Math.floor(Math.random() * 4);
    const bannerImagePath = getImageParameters(bannerImages[random].slug);

    setBannerImageUrl(bannerImagePath);
  }, [location]);

  return (
    <>
      <figure
        className={`relative h-[60vh] overflow-hidden bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${bannerImageUrl})` }}
      >
        <div className="absolute size-full bg-black opacity-60 content-['']" />
        <div className="absolute right-[-20%] h-full w-7/12 skew-x-[20deg] bg-[#F98500] opacity-50 content-[''] md:right-[-12%]" />
      </figure>
      <section className="bg-[#F7F7F7] py-4">
        <h1 className="text-center font-['Open_Sans'] text-4xl font-semibold">
          {isOtherServicesPath ? `Essential Services For A Safe Home` : `A Unique Kitchen Remodeling Experience`}
        </h1>
        <div className="grid justify-items-center pt-8 md:grid-cols-3 [&>*]:flex [&>*]:flex-col [&>*]:pb-4 [&>*]:md:pb-2">
          {reviewsData.map((review: ReviewsData, index) => (
            <Reviews
              key={index}
              className="last:pt-5"
              imgAlt={review.imgAlt}
              imgSrc={review.imgSrc}
              review={review.review}
              reviewer={review.reviewer}
              url={review.url}
            />
          ))}
        </div>
      </section>
    </>
  );
}
