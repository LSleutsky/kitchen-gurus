import type { Route } from "./+types/home";
import StarIcon from "@mui/icons-material/Star";
import ContactModal from "~/components/ContactModal";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About Us | Kitchen Gurus" }, { name: "description", content: "About Kitchen Gurus" }];
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
            <StarIcon key={index} className="m-auto inline-block text-[#F7C400]" fontSize="large" />
          ))}
        </span>
        <h1 className="text-center font-['Open_Sans'] text-4xl font-semibold">Trusted By Many</h1>
        <p className="mt-5 text-center font-['Open_Sans'] text-lg font-light leading-8">
          Our expert technicians have successfully and seamlessly completed thousands of renovations on time and within
          budgets. We guarantee 100% customer satisfaction by going above and beyond in ensuring that each project
          exceeds our client's expectations.
        </p>
        <ContactModal ctaText="Get a Free Consultation" />
      </section>
    </>
  );
}
