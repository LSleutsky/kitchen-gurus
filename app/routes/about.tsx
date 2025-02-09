import { Link, useNavigate } from 'react-router';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from "@mui/icons-material/Star";

import Button from '~/components/Button';
import ContactModal from "~/components/ContactModal";

import type { AboutUsData, LocationData } from '~/utils/constants';
import { aboutUsData, locationData } from '~/utils/constants';

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: `About Us | Kitchen Gurus` }, { name: `description`, content: `About Kitchen Gurus` }];
}

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <section className="px-8 py-6 font-['Open_Sans']">
        <h1 className="text-center font-['Open_Sans'] text-4xl font-semibold pb-6">
          Our Core Values
        </h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {aboutUsData.map((data: AboutUsData, index: number) => (
            <div key={index} className="flex flex-col justify-evenly bg-[#51A655] mx-2 text-white text-center font-['Open_Sans'] p-4 min-h-80">
              <span>{data.icon}</span>
              <h3 className="text-3xl p-2">{data.title}</h3>
              <p className="font-light">{data.content}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center bg-[#F7F7F7] p-8">
        <span className="pb-5">
          {Array.from({ length: 5 }).map((_, index: number) => (
            <StarIcon key={index} className="m-auto inline-block text-[#F7C400]" fontSize="large" />
          ))}
        </span>
        <h1 className="text-center font-['Open_Sans'] text-4xl font-semibold">Trusted By Many</h1>
        <p className="mt-5 text-center font-['Open_Sans'] text-lg font-light leading-8">
          {`Our expert technicians have successfully and seamlessly completed thousands of renovations on time and within
          budgets. We guarantee 100% customer satisfaction by going above and beyond in ensuring that each project
          exceeds our client's expectations.`}
        </p>
        <ContactModal ctaText="Get a Free Consultation" />
      </section>
      <section className="bg-[#51A655] text-center font-['Open_Sans'] py-6">
        <h2 className="text-3xl font-semibold">Need Financing?</h2>
        <h3 className="text-xl font-semibold mt-2">Check Out Our 0% Interest Financing Options</h3>
        <Button
          className="mx-4 mt-6 self-center p-4 cursor-pointer hover:bg-white"
          text="Visit Financing"
          onClick={() => navigate(`/financing`)}
        />
      </section>
      <section className="flex flex-col justify-center items-center p-8 pb-0">
        <h1 className="text-center font-['Open_Sans'] text-4xl font-semibold pb-6">
          Our Locations
        </h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {locationData.map((data: LocationData, index: number) => (
            <Link key={index} target="_blank" to={data.url}>
              <div
                className="flex flex-col justify-evenly mx-2 text-white text-center font-['Open_Sans'] min-h-80 p-6"
                style={{ backgroundColor: `${data.backgroundColor}` }}
              >
                <span>
                  <LocationOnIcon sx={{
                    '&.MuiSvgIcon-root': {
                      color: `${data.iconColor}`,
                      fontSize: `80px`
                    }
                  }} />
                </span>
                <h3 className="text-xl p-2">{data.location}</h3>
                <p>
                  {data.streetAddress}
                  <br />
                  {data.cityStateZip}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
