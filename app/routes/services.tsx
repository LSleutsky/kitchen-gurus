import { useOutletContext } from "react-router";

import Content from "~/components/Content";

import { displayLocation, getImageParameters } from "~/utils";
import type { MetaData, UserLocationData } from "~/utils/constants";
import { metaData, otherServicesData } from "~/utils/constants";

import type { Route } from "./+types/services";


export function meta({ matches }: Route.MetaArgs): MetaData | object {
  const loaderData = matches.find(match => match?.id === `layouts/layout`)?.data;

  return [
    { title: `Other Services | Kitchen Gurus` },
    { name: `description`, content: `Additional Gurus Services` },
    {
      name: `keywords`,
      content: `home services, essential home services, healthy home, keeping home healthy, modern updated home, home improvement, air quality, mold control, exterior repairs, landscaping, fencing, home services in ${displayLocation(loaderData, true)}, essential home services in ${displayLocation(loaderData, true)} home improvement home services in ${displayLocation(loaderData, true)}`
    },
    { name: `og:title`, content: `Other Services | Kitchen Gurus` },
    { name: `og:description`, content: `Essential Home Services provided by the Gurus family of contractors` },
    ...metaData
  ];
}

export default function Contact() {
  const userLocation = useOutletContext<UserLocationData>();
  const basementWaterproofingImagePath = getImageParameters(`2d0fa6d4-5e41-4855-847e-13a520806c5b`, `1200x760`);
  const guttersImagePath = getImageParameters(`94514333-1eb4-4a81-89fc-f52ea96f9458`, `1200x760`);
  const moldRemediationImagePath = getImageParameters(`548070ac-a918-419d-92e5-819113e6aa59`, `1200x760`);
  const roofingSidingImagePath = getImageParameters(`fdb46ca8-2e7c-40c9-889f-36325daf5e83`, `1200x760`);
  const landscapingFencingImagePath = getImageParameters(`148d8257-5c66-4b04-9778-bb5dd1cde075`, `1200x760`);
  const ctaClassName = `w-fit mx-4 mt-6 p-4 cursor-pointer self-center lg:self-start`;
  const { guttersWindows, landscapingFencing, moldRemediation, roofingSiding, waterproofing } = otherServicesData;

  return (
    <>
      <section>
        <Content
          cta
          contentClass="py-6"
          ctaClassName={ctaClassName}
          ctaOnClick={() => window.open(`https://basementwaterproofinggurus.com/`)}
          ctaText="Visit Basement Waterproofing"
          heading="Basement Waterproofing"
          imageAlt="Basement drainage system"
          imageUrl={basementWaterproofingImagePath}
          mainContent={waterproofing(userLocation)}
        />
      </section>
      <section>
        <Content
          contentReverse
          cta
          contentClass="py-6"
          ctaClassName={ctaClassName}
          ctaOnClick={() => window.open(`https://basementwaterproofinggurus.com/mold-remediation`)}
          ctaText="Visit Mold Remediation"
          heading="Mold Remediation"
          imageAlt="Basement mold removal"
          imageUrl={moldRemediationImagePath}
          mainContent={moldRemediation}
        />
      </section>
      <section>
        <Content
          cta
          contentClass="py-6"
          ctaClassName={ctaClassName}
          ctaOnClick={() => window.open(`https://roofgurus.com/`)}
          ctaText="Visit Roofing & Siding"
          heading="Roofing & Siding"
          imageAlt="Roofing and Siding"
          imageUrl={roofingSidingImagePath}
          mainContent={roofingSiding}
        />
      </section>
      <section>
        <Content
          contentReverse
          cta
          contentClass="py-6"
          ctaClassName={ctaClassName}
          ctaOnClick={() => window.open(`https://guttergurus.com/`)}
          ctaText="Visit Gutters & Windows"
          heading="Gutters & Windows"
          imageAlt="Gutters and Windows"
          imageUrl={guttersImagePath}
          mainContent={guttersWindows}
        />
      </section>
      <section>
        <Content
          cta
          contentClass="py-6"
          ctaClassName={ctaClassName}
          ctaOnClick={() => window.open(`https://lawn-gurus.com/`)}
          ctaText="Visit Landscaping & Fencing"
          heading="Landscaping & Fencing"
          imageAlt="Landscaping and Fencing"
          imageUrl={landscapingFencingImagePath}
          mainContent={landscapingFencing}
        />
      </section>
    </>
  );
}
