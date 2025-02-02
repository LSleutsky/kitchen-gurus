import { Link } from "react-router";

import Content from "~/components/Content";

import { displayLocation, getImageParameters } from "~/utils";

import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [{ title: `Other Services | Kitchen Gurus` }, { name: `description`, content: `Additional Gurus Services` }];
}

export default function Contact() {
  const basementWaterproofingUrl = getImageParameters(`14a8da86-3a23-4ab7-b9bb-caa417df4764`, `1200x760`);
  const moldRemediationUrl = getImageParameters(`7aa825d3-c18d-4430-a0e2-db95e51ce07b`, `1200x760`);

  const basementWaterproofingContent = () => {
    const paragraphOne = (
      <>
        {`If you're dealing with a leaking/flooded basement, and/or`}
        <Link className="text-[#F98500]" target="_blank" to="https://basementwaterproofinggurus.com/structural-repair/">
          {` structural repair `}
        </Link>
        issues, then our sister company
        <Link className="text-[#F98500]" target="_blank" to="https://basementwaterproofinggurus.com">
          {` Basement Waterproofing Gurus `}
        </Link>
        {`is what you're looking for to obtain peace of mind!`}
      </>
    );

    const paragraphTwo = `Basements will get wet for a number of different reasons, from the water table underground in
      ${displayLocation()}, to a structurally unsound foundation, to a home simply being old and settling. Whether you
      have hydrostatic pressure pushing on the walls of your foundation, or rising water levels underneath your home, water
      will naturally seek the path of least resistance, and find its way in.`;

    const paragraphThree = `Luckily for you, Basement Waterproofing Gurus exists, and you no longer have to dread walking
      down into your basement, and dealing with dampness, condensation, and that musty odor. We use the latest technology
      and highest quality techniques to ensure your basement stays dry and can easily become an extra living space.`;

    return [paragraphOne, paragraphTwo, paragraphThree];
  };

  return (
    <>
      <section>
        <Content
          cta
          contentClass="py-6"
          ctaClassName="w-fit mx-4 mt-6 p-4 cursor-pointer self-center md:self-start"
          ctaOnClick={() => window.open(`https://basementwaterproofinggurus.com/`)}
          ctaText="Visit Basement Waterproofing"
          heading="Basement Waterproofing"
          imageAlt="Basement drainage system"
          imageUrl={basementWaterproofingUrl}
          mainContent={basementWaterproofingContent()}
        />
      </section>
      <section>
        <Content
          contentReverse
          cta
          contentClass="py-6"
          ctaClassName="w-fit mx-4 mt-6 p-4 cursor-pointer self-center md:self-start"
          ctaOnClick={() => window.open(`https://basementwaterproofinggurus.com/mold-remediation`)}
          ctaText="Visit Mold Remediation"
          heading="Mold Remediation"
          imageAlt="Basement mold removal"
          imageUrl={moldRemediationUrl}
          mainContent={basementWaterproofingContent()}
        />
      </section>
    </>
  );
}
