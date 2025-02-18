import { Link } from "react-router";

import type { FinancingData } from "~/utils/constants";
import { financingData } from "~/utils/constants";

import type { Route } from "./+types/home";

// interface FinancingData {
//   alt: string;
//   src: string;
//   url: string;
//   info: string[];
// }

// const financingData: FinancingData[] = [
//   {
//     alt: `Foundation Finance Company`,
//     src: `/foundation-financing.png`,
//     url: `https://portal.foundationfinance.com/links/JRdlQdCnsLmrLcujdRwrYQ9nQi0nQhhclMBEIP5lJW4=`,
//     info: [
//       `Foundation Finance has some of the lowest interest rates available.`,
//       `Loan options for low, medium, and high credit scores.`,
//       `Available in DE - MD - PA`
//     ]
//   },
//   {
//     alt: `Mariner Finance`,
//     src: `/mariner-financing.webp`,
//     url: `https://www.tciconnection.com/internetApp/marinerfinance/application/get_started.action`,
//     info: [
//       `Mariner has several locations throughout the Tristate area to serve you.`,
//       `Mariner offers 0% Financing for the first 12 months.`,
//       `They're known for their high approval rates.`,
//       `Available in DE - MD - NJ - PA`
//     ]
//   },
//   {
//     alt: `Enhancify`,
//     src: `/enhancify-logo.webp`,
//     url: `https://www.enhancify.com/basement-gurus`,
//     info: [
//       `Enhancify offers 0% interest for qualified customers as well as HELOC loans!`,
//       `Loan options for all credit scores.`,
//       `Available in DE - MD - NJ - PA`
//     ]
//   }
// ];

export function meta({}: Route.MetaArgs) {
  return [{ title: `Financing Options | Kitchen Gurus` }, { name: `description`, content: `Financing with Kitchen Gurus` }];
}

export default function Financing() {
  return (
    <section className="text-center font-['Open_Sans'] py-6">
      <h1 className="text-2xl font-semibold">A Leading Kitchen Remodeling Company</h1>
      <p className="mt-3 px-6">
        As kitchen remodeling experts, we understand that getting the finances needed to maintain your home can be a huge
        undertaking - much less finding the money to improve it. However, making the investment required to keep your home modern
        and fresh will help propel your home into another decade. We now offer financing for every situation! Provide your
        information to us and see if you qualify for <em>no-cost-down</em> kitchen remodeling.
      </p>
      <p className="mt-3 px-6">
        Call us at
        <Link className="text-[#F98500]" to="tel:1-800-834-6584">
          {` 1-800-834-6584 `}
        </Link>
        or fill out our
        <Link className="text-[#F98500]" to="/contact">
          {` contact form `}
        </Link>
        to inquire more about our financing options best suited for your customized home improvement project.
      </p>
      <div className="mt-8 grid gap-12 grid-cols-1 px-8 items-center md:grid-cols-3">
        {financingData.map((data: FinancingData, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <img alt={data.alt} className="cursor-pointer" src={data.src} onClick={() => window.open(data.url)} />
            <ul className="text-left">
              {data.info.map((info, infoIndex) => (
                <li key={infoIndex} className="list-disc">{info}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
