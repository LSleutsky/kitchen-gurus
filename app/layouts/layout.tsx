import { Link, Outlet, useLocation } from "react-router";

import CopyrightIcon from "@mui/icons-material/Copyright";
import DiscountIcon from '@mui/icons-material/Discount';
import PhoneIcon from '@mui/icons-material/Phone';

import Banner from "~/components/Banner";
import ContactModal from "~/components/ContactModal";
import DrawerHeader from "~/components/DrawerHeader";
import Logo from "~/components/Logo";
import RatingSlider from "~/components/RatingSlider";
import Strip from "~/components/svg/Strip";

import type { SocialMediaOptions } from "~/utils/constants";
import { socialMediaActions } from "~/utils/constants";

import type { Route } from "./+types/layout";

export async function loader({}: Route.LoaderArgs) {
  try {
    const response = await fetch(`https://geolocation-db.com/json/`);

    if (!response.ok)
      throw new Error(`Response status: ${response.status}`);

    const json = await response.json();

    return json;
  } catch (error: any) {
    console.error(`Error fetching data:`, error);
  }
}

export default function MainLayout({ loaderData }: Route.ComponentProps) {
  const location = useLocation();
  const isHomePath = location.pathname === `/`;

  return (
    <div className="flex h-full min-h-full flex-col">
      <DrawerHeader />
      <main className="flex-[1]">
        <Banner userLocation={loaderData} />
        <Outlet context={loaderData} />
      </main>
      <footer className="w-full">
        <section className="flex flex-col justify-center items-center">
          <Strip className={isHomePath ? `pt-0` : `pt-3`} />
          <h2 className="text-3xl font-[`Open_Sans`] font-semibold py-8">LICENSED & INSURED</h2>
          <hr className="border-2 border-[#51A655] w-16" />
          <RatingSlider />
        </section>
        <section className="flex flex-col items-center bg-[#F7F7F7] p-8">
          <span className="pb-5">
            {Array.from({ length: 3 }).map((_, index: number) => (
              <DiscountIcon key={index} className="m-auto inline-block text-[#F7C400]" fontSize="large" />
            ))}
          </span>
          <h1 className="text-center font-['Open_Sans'] text-4xl font-semibold" id="discounts">Discounts Available</h1>
          <h2 className="text-center font-['Open_Sans'] text-xl font-semibold mt-2" id="discounts">15% Off</h2>
          <p className="text-center font-['Open_Sans'] text-lg font-light leading-8">
            Military | Police | Firefighters | First Responders | Teachers | Seniors
          </p>
          <ContactModal ctaText="Meet With Us" />
        </section>
        <section className="bg-[#51A655]">
          <div className="flex flex-col-reverse justify-between items-center text-white md:flex-row">
            <Logo alt="Kitchen Gurus logo" src="/kitchen-gurus-logo.png" />
            <div className="w-full flex flex-col items-center pt-2 [&>*]:pb-2 md:grid md:grid-cols-2 md:w-2/3">
              <Link to="/testimonials">
                Testimonials
              </Link>
              <Link to="/licensed-insured">
                Licensed & Insured
              </Link>
              <Link to="/financing">
                Financing
              </Link>
              <Link to="/affordable-experienced">
                Affordable & Experienced
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between bg-black p-4 text-sm md:flex-row">
            <span className="flex flex-col items-center md:items-start">
              <Link className="text-white text-base md:mb-1" to="tel:1-800-834-6584">
                <PhoneIcon />
                {` 1-800-834-6584`}
              </Link>
            </span>
            <span>
              <CopyrightIcon className="-mt-0.5 text-white translate-[-1.5px]" fontSize="small" />
              <span className="ml-0.5 font-['Open_Sans'] text-white text-base">
                {new Date().getFullYear()} Kitchen Gurus | All Rights Reserved
              </span>
            </span>
            <span className="mt-3 md:mt-0 [&>*]:mx-2 [&>*]:text-white">
              {socialMediaActions.map((socialMedia: SocialMediaOptions) =>
                <Link
                  key={socialMedia.name}
                  target="_blank"
                  title={socialMedia.name}
                  to={socialMedia.url}
                >
                  {socialMedia.icon}
                </Link>
              )}
            </span>
          </div>
        </section>
      </footer>
    </div>
  );
}
