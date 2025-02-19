import QuickLinks from "~/components/QuickLinks";

import { affordableExperiencedData } from "~/utils/constants";

import type { Route } from "./+types/affordable-experienced";

export function meta({}: Route.MetaArgs) {
  return [{ title: `Affordable & Experienced | Kitchen Gurus` }, { name: `description`, content: `Kitchen Gurus is Affordable and Experienced` }];
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
