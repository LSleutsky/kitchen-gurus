import type { Route } from './+types/home';
import { FaStar } from "react-icons/fa";
import Button from '~/components/Button';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'About Us | Kitchen Gurus' },
    { name: 'description', content: 'About Kitchen Gurus' },
  ];
}

export default function About() {
  return (
    <>
      <section className="p-4 font-['Open_Sans']">
        <h1>This is the About Page</h1>
      </section>
      <section className="flex flex-col items-center bg-[#F7F7F7] p-8">
        <span className="pb-5">
          {Array.from({ length: 5 }).map((_, index: number) => (
            <FaStar key={index} className="inline-block m-auto ml-2 text-[#F7C400]" size={22} />
          ))}
        </span>
        <h1 className="text-center text-4xl font-['Open_Sans'] font-semibold">Trusted By Many</h1>
        <p className="leading-8 font-['Open_Sans'] text-lg text-center font-light mt-5">
          Our expert technicians have successfully and seamlessly completed thousands of renovations on time and within
          budgets. We guarantee 100% customer satisfaction by going above and beyond in ensuring that each project exceeds
          our client's expectations.
        </p>
        <Button text="Get a Free Consultation" />
      </section>
    </>
  );
}
