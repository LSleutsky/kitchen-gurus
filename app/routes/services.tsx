import { Link, useOutletContext } from "react-router";

import Content from "~/components/Content";

import { displayLocation, getImageParameters } from "~/utils";
import type { UserLocationData } from "~/utils/constants";

import type { Route } from "./+types/services";


export function meta({}: Route.MetaArgs) {
  return [{ title: `Other Services | Kitchen Gurus` }, { name: `description`, content: `Additional Gurus Services` }];
}

export default function Contact() {
  const userLocation = useOutletContext<UserLocationData>();
  const basementWaterproofingImagePath = getImageParameters(`2d0fa6d4-5e41-4855-847e-13a520806c5b`, `1200x760`);
  const guttersImagePath = getImageParameters(`94514333-1eb4-4a81-89fc-f52ea96f9458`, `1200x760`);
  const moldRemediationImagePath = getImageParameters(`548070ac-a918-419d-92e5-819113e6aa59`, `1200x760`);
  const roofingSidingImagePath = getImageParameters(`fdb46ca8-2e7c-40c9-889f-36325daf5e83`, `1200x760`);
  const landscapingFencingImagePath = getImageParameters(`148d8257-5c66-4b04-9778-bb5dd1cde075`, `1200x760`);

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
        {`is what you're looking for to obtain peace of mind! We handle both interior and exterior issues, and our inspectors
        are expertly trained in this area to provide the most adequate solutions based on the current industry standards.`}
      </>
    );

    const paragraphTwo = `Basements will get wet for a number of different reasons, from the water table underground in
      ${displayLocation(userLocation)}, to a structurally unsound foundation, to a home simply being old and settling. Whether you
      have hydrostatic pressure pushing on the walls of your foundation, or rising water levels underneath your home, water
      will naturally seek the path of least resistance, and find its way in.`;

    const paragraphThree = `With Basement Waterproofing Gurus, you no longer have to dread walking
      down into your basement, and dealing with dampness, condensation, and that musty odor. We use the latest technology
      and cutting-edge techniques to ensure your basement stays dry and can easily become an extra living space.`;

    return [paragraphOne, paragraphTwo, paragraphThree];
  };

  const moldRemediationContent = () => {
    const paragraphOne = `Wet basements can lead to serious mold issues, damage to property, your home's foundation,
      and can cause serious health problems for you and your family. Where there is darkness and wetness - like a
      basement - odds are very high that mold spores will have a prime breeding ground.`;

    const paragraphTwo = (
      <>
        <Link className="text-[#F98500]" target="_blank" to="https://basementwaterproofinggurus.com/">
          {` Basement Gurus `}
        </Link>
        are highly experienced and trained in every step of the mold detection and mold removal process, being certified
        along the way, giving you assurance that the job will be completed efficiently and safely.
      </>
    );

    const paragraphThree = `High humidity levels in the home can also lead to mold and other unfavorable conditions, which
      can quickly spread into other areas of your home, including the vents, which will result in moldy/musty spores being
      circulated throughout your household. Dehumidifiers are a great resource, particularly in the warm summer months.`;

    return [paragraphOne, paragraphTwo, paragraphThree];
  };

  const roofingSidingContent = () => {
    const paragraphOne = (
      <>
        {`When it comes to curb appeal, nothing enhances your home's value and credibility like a shiny new
      roof and fresh, clean siding. Not only is your roof and`}
        <Link className="text-[#F98500]" target="_blank" to="https://roofgurus.com/siding-services/">
          {` siding `}
        </Link>
        {`a fundamental layer between you and the outdoor elements,
        it's one of the first things people - and more importantly, `}
        <em>you</em> - look at when seeing a structure.
      </>
    );

    const paragraphTwo = (
      <>
        Our sister company
        <Link className="text-[#F98500]" target="_blank" to="https://roofgurus.com/">
          {` Roof Gurus `}
        </Link>
        specializes in both residential and
        <Link className="text-[#F98500]" target="_blank" to="https://roofgurus.com/roofing-services/commercial-roofing/">
          {` commercial roofing `}
        </Link>
        ranging from
        <Link className="text-[#F98500]" target="_blank" to="https://roofgurus.com/roofing-services/shingle-roofing/">
          {` traditional shingles `}
        </Link>
        to flat roofs,
        <Link className="text-[#F98500]" target="_blank" to="https://roofgurus.com/roofing-services/metal-roofing/">
          {` metal roofs`}
        </Link>
        ,
        <Link className="text-[#F98500]" target="_blank" to="https://roofgurus.com/roofing-services/rubber-roofing/">
          {` rubber roofs`}
        </Link>
        ,
        and everything in between. We can repair just about anything atop your home or business, and your
        home will come out safe from leaks, heat penetration, and storms!
      </>
    );

    const paragraphThree = `Without proper maintenance and repairs, a roof can become very damaged over time and lead to costly
      repairs and/or replacements down the road. It's important to have a professional check for signs of wear, such as missing
      shingles or buckled areas, so manageable repairs don't become nightmare ones.`

    return [paragraphOne, paragraphTwo, paragraphThree];
  };

  const guttersWindowsContent = () => {
    const paragraphOne = `Seamless gutters are one of the most popular types of gutters on the market. Their seamless base
      greatly reduces the possibility of leaks and clogs. The drainage system is located at the corners, which are then
      connected to a downspout. These gutters come in a variety of colors, allowing a perfect match for your home.`;

    const paragraphTwo = `We use a virtually invisible steel hanger which secures the gutter to your home tightly. This
      distinctive gutter hanger will augment the seamless look of your gutters, and is also significantly stronger than the
      spike and ferrule system used with lightweight aluminum gutters.`;

    const paragraphThree = (
      <>
        {`Windows are an extremely important aspect of your home's effectiveness. Whatever your window needs
        are - energy efficiency, aesthetics, durability, traditional double-hung - our sister company`}
        <Link className="text-[#F98500]" target="_blank" to="https://guttergurus.com/">
          {` Gutter Gurus `}
        </Link>
        meets them with high-quality
        Affinity Window products that meet or exceed the industry standards
      </>
    );

    return [paragraphOne, paragraphTwo, paragraphThree];
  };

  const landscapingFencingContent = () => {
    const paragraphOne = (
      <>
        Our sister company
        <Link className="text-[#F98500]" target="_blank" to="https://lawn-gurus.com/">
          {` Lawn Gurus `}
        </Link>
        specializes in maintaining healthy, green lawns for residential and commercial clients. Comprehensive services
        include mowing, fertilizing, aerating, seeding, and pest control.
      </>
    );

    const paragraphTwo = (
      <>
        Lawn Gurus also provide professional
        <Link className="text-[#F98500]" target="_blank" to="https://lawn-gurus.com/services/fence-installation-repair/">
          {` fence installation `}
        </Link>
        services, offering a range of materials including chain link, wood, and vinyl fencing. The affordable options ensure
        low maintenance and secure boundaries, as well as beautifying any property.
      </>
    );

    const paragraphThree = (
      <>
        <Link className="text-[#F98500]" target="_blank" to="https://lawn-gurus.com/services/sprinkler-installation-repair/">
          Sprinkler installations
        </Link>
        {` is another service that we provide. We specialize in installing efficient sprinkler systems that automatically distribute
        water to keep your lawn and plants healthy. Our services include connecting water supplies, assembling valve manifolds,
        and positioning sprinklers for optimal coverage.`}
      </>
    );

    return [paragraphOne, paragraphTwo, paragraphThree];
  };

  const ctaClassName = `w-fit mx-4 mt-6 p-4 cursor-pointer self-center lg:self-start`;

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
          mainContent={basementWaterproofingContent()}
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
          mainContent={moldRemediationContent()}
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
          mainContent={roofingSidingContent()}
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
          mainContent={guttersWindowsContent()}
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
          mainContent={landscapingFencingContent()}
        />
      </section>
    </>
  );
}
