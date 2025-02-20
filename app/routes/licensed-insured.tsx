import QuickLinks from "~/components/QuickLinks";

import type { MetaData } from "~/utils/constants";
import { licensedInsuredData, metaData } from "~/utils/constants";

import type { Route } from "./+types/licensed-insured";

export function meta({}: Route.MetaArgs): MetaData | object {
  return [
    { title: `Licensed & Insured | Kitchen Gurus` },
    { name: `description`, content: `Kitchen Gurus is Licensed and Insured` },
    {
      name: `keywords`,
      content: `kitchens, kitchen design, kitchen ideas, kitchen design ideas, custom cabinets, kitchen cabinet refacing, kitchen cabinet design, kitchen cabinet ideas, kitchen layout, beautiful kitchens, modern kitchn design`
    },
    { name: `og:title`, content: `Licensed & Insured | Kitchen Gurus` },
    { name: `og:description`, content: `Kitchen Gurus is a fully licensed and insured contractor, ensuring precision and quality in luxury kitchen transformations` },
    ...metaData
  ];
}

export default function LicensedInsured() {
  return (
    <QuickLinks
      footer={licensedInsuredData.footer}
      header={licensedInsuredData.header}
      image="4a093225-5949-4e73-b9ad-c86b36663075"
      reasons={licensedInsuredData.reasons}
    />
  );
}
