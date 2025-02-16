import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { startCase } from "es-toolkit/string";

import { displayLocation, getImageParameters } from "~/utils";
import type { ReviewsData } from "~/utils/constants";
import { bannerImages, reviewsData } from "~/utils/constants";

import QuickContact from "./QuickContact";
import Reviews from "./Reviews";

interface Props {
  userLocation: any;
}

export default function Banner({ userLocation }: Props) {
  const [bannerImageUrl, setBannerImageUrl] = useState<string>(``);
  const location = useLocation();
  const isOtherServicesPath = location.pathname.includes(`services`);
  const endUsersLocation = displayLocation(userLocation);

  useEffect(() => {
    const index = Math.floor(Math.random() * 8);
    const bannerImagePath = getImageParameters(bannerImages[index].slug);

    setBannerImageUrl(bannerImagePath);
  }, [location]);

  return (
    <div>
      <section className="relative flex-flex-col">
        <figure
          className={`relative h-[70vh] overflow-hidden bg-cover bg-center bg-no-repeat mt-22 sm:h-[60vh]`}
          style={{ backgroundImage: `url(${bannerImageUrl})` }}
        >
          <div className="absolute size-full bg-black opacity-60 content-['']" />
          <div className="absolute right-[-26%] h-full w-7/12 skew-x-[20deg] bg-[#F98500] opacity-50 content-[''] sm:right-[-20%] md:right-[-12%] 2xl:w-8/12" />
        </figure>
        <div className="absolute top-0 h-full w-full px-4 [&>*]:px-4 pt-5 sm:py-0 md:top-6">
          <div className="flex flex-col justify-around items-center h-full md:flex-row">
            <section className="font-['Open_Sans'] h-full flex flex-col justify-evenly items-center text-white md:pr-2 md:justify-center">
              <div className="text-center font-light text-lg sm:text-xl">
                {`Kitchen Remodeling in ${startCase(endUsersLocation)}`}
              </div>
              <div className="text-center text-2xl md:my-5 md:text-3xl">
                Experience The Kitchen Of Your Dreams
              </div>
              <div className="text-center font-light text-lg sm:text-xl">
                Financing Available | Discounts Available
              </div>
            </section>
            <aside className="pt-3 flex flex-col items-center justify-center sm:pt-0 md:pl-2">
              <QuickContact />
            </aside>
          </div>
        </div>
      </section>
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
    </div>
  );
}
