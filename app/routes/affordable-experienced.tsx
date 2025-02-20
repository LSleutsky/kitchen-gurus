import QuickLinks from "~/components/QuickLinks";

import type { MetaData } from "~/utils/constants";
import { affordableExperiencedData, metaData } from "~/utils/constants";

import type { Route } from "./+types/affordable-experienced";

export function meta({}: Route.MetaArgs): MetaData | object {
  return [
    { title: `Affordable & Experienced | Kitchen Gurus` },
    { name: `description`, content: `Kitchen Gurus is Affordable and Experienced` },
    {
      name: `keywords`,
      content: `kitchens, kitchen renovation, remodel kitchen, remodel kitchen cost, remodeling contractors, kitchen renovation cost, cost to remodel kitchen, kitchen remodel estimate, best kitchen remodels, best kitchen renovations, best kitchen remodeling contractors, average kitchen remodel cost`
    },
    { name: `og:title`, content: `Affordable & Experienced | Kitchen Gurus` },
    { name: `og:description`, content: `Kitchen Gurus are affordable and experienced contractors that can transform your kitchen from top to bottom` },
    ...metaData
  ];
}

export default function AffordableExperienced() {
  return (
    <QuickLinks
      footer={affordableExperiencedData.footer}
      header={affordableExperiencedData.header}
      image="fcc0217d-3cf7-4f26-8560-2fd6684615e0"
      reasons={affordableExperiencedData.reasons}
    />
  );
}
