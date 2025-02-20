import { Link } from "react-router";

import type { FinancingData, MetaData } from "~/utils/constants";
import { financingData, metaData } from "~/utils/constants";

import type { Route } from "./+types/financing";

export function meta({}: Route.MetaArgs): MetaData | object {
  return [
    { title: `Financing Options | Kitchen Gurus` },
    { name: `description`, content: `Financing with Kitchen Gurus` },
    {
      name: `keywords`,
      content: `kitchen cost, kitchen remodeling cost, kitchen renovation cost, kitchen makeover cost, how much does it cost to remodel kitchen, kitchen design cost, kitchen redesign cost, cost to remodel kitchen, cost to upgrade kitchen, kitchen cabinet cost, how much does it cost to replace kitchen cabinets, average kitchen renovation cost, average cost of small kitchen remodel, kitchen refurbishment cost, kitchen facelift, kitchen makeovers on a budget, cost of kitchen remodel ${new Date().getFullYear()}`
    },
    { name: `og:title`, content: `Financing Options | Kitchen Gurus` },
    { name: `og:description`, content: `Kitchen Gurus is your trusted kitchen renovation partner! Trust us to meet your every remodeling need` },
    ...metaData
  ];
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
