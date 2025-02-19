import QuickLinks from "~/components/QuickLinks";

import { licensedInsuredData } from "~/utils/constants";

import type { Route } from "./+types/licensed-insured";

export function meta({}: Route.MetaArgs) {
  return [{ title: `Licensed & Insured | Kitchen Gurus` }, { name: `description`, content: `Kitchen Gurus is Licensed and Insured` }];
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
