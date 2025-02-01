import { Link } from 'react-router';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from "@mui/icons-material/Star";

import ContactModal from "~/components/ContactModal";
import Bullseye from '~/components/svg/Bullseye';
import HandShake from '~/components/svg/Handshake';
import Ribbon from "~/components/svg/Ribbon";
import StarUser from "~/components/svg/StarUser";

import type { Route } from "./+types/home";

interface AboutUsData {
  title: string;
  content: string;
  icon: React.JSX.Element;
}

interface LocationData {
  backgroundColor: string;
  cityStateZip: string;
  iconColor: string;
  location: string;
  streetAddress: string;
  url: string;
}

const aboutUsData: AboutUsData[] = [
  {
    icon: <Bullseye />,
    title: `Our Mission`,
    content: `Our team of experts aim to achieve the utmost standards and provide the best level of care in designing
      and remodeling your dream kitchen.`
  },
  {
    icon: <HandShake />,
    title: `On Budget`,
    content: `We prioritize and precisely plan your renovation project, stay within budget, and manage our every
      move to keep costs manageable.`
  },
  {
    icon: <StarUser />,
    title: `Saving Time`,
    content: `We have the necessary experience, manpower, and resources to ensure the project runs flawlessly. We ensure
      that every project is completed on time.`
  },
  {
    icon: <Ribbon />,
    title: `Notable Quality`,
    content: `We never overlook the quality of our work, and only utilize the finest materials and modern methods to
      guarantee a stellar remodeling job for you.`
  }
];

const locationData: LocationData[] = [
  {
    backgroundColor: `#475B48`,
    cityStateZip: `Lancaster, PA 17601`,
    iconColor: `#C13E33`,
    location: `LANCASTER, PA`,
    streetAddress: `2384 Harrisburg Pike`,
    url: `https://www.google.com/localservices/prolist?spp=Cg0vZy8xMXEyN2R6cnJq&scp=CgAaEkJhc2VtZW50IEd1cnVzIExMQyoSQmFzZW1lbnQgR3VydXMgTExD&q=Basement+Gurus+LLC&src=2&slp=UhUIARIREg8iDS9nLzExcTI3ZHpycmo`
  },
  {
    backgroundColor: `#51A655`,
    cityStateZip: `Southampton, PA 18966`,
    iconColor: `#E0AA25`,
    location: `SOUTHAMPTON, PA`,
    streetAddress: `55 2nd Street Pike`,
    url: `https://www.google.com/maps/place/Basement+Gurus/@40.0770267,-75.0837746,759m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c6b1d00267f5b7:0xc3c464130b250006!8m2!3d40.0770267!4d-75.0837746!16s%2Fg%2F11j8t98r79?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D`
  },
  {
    backgroundColor: `#83A885`,
    cityStateZip: `Philadelphia, PA 19111`,
    iconColor: `#19242D`,
    location: `GREATER PHILADELPHIA`,
    streetAddress: `431 Rhawn St.`,
    url: `https://www.google.com/localservices/prolist?spp=Cg0vZy8xMWo4dDk4cjc5&scp=CgAaDkJhc2VtZW50IEd1cnVzKg5CYXNlbWVudCBHdXJ1cw%3D%3D&q=Basement+Gurus&src=2&slp=UhUIARIREg8iDS9nLzExajh0OThyNzk`
  },
  {
    backgroundColor: `#475B48`,
    cityStateZip: `Wilmington, DE 19804`,
    iconColor: `#C13E33`,
    location: `WILMINGTON, DE`,
    streetAddress: `244 W. Champlain Ave`,
    url: `https://www.google.com/localservices/prolist?spp=Cg0vZy8xMWZ2NnBtc3l4&scp=CgAaEkJhc2VtZW50IEd1cnVzIExMQyoSQmFzZW1lbnQgR3VydXMgTExD&q=Basement+Gurus+LLC&src=2&slp=UhUIARIREg8iDS9nLzExZnY2cG1zeXg%3D`
  }
];

export function meta({}: Route.MetaArgs) {
  return [{ title: `About Us | Kitchen Gurus` }, { name: `description`, content: `About Kitchen Gurus` }];
}

export default function About() {
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
