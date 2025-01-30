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
    </>
  );
}
