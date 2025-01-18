import type { Route } from './+types/home';
import { Link } from 'react-router';
import Content from '~/components/Content';
import { displayLocation, getImageParameters } from '~/utils';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Kitchen Gurus' },
    { name: 'description', content: 'Welcome to Kitchen Gurus!' },
  ];
}

export default function Home() {
  const kitchenRemodelUrl = getImageParameters('bcfe92d3-dbf2-4fe7-b383-45a3cf74e4f0', '1200x760');

  const mainContent = () => {
    const paragraphOne = `Kitchen Gurus is one of the leading companies for kitchen remodeling needs in
      ${displayLocation(true)}. We will professionally and responsibly complete all of your kitchen makeover alterations,
      and be there every step of the way in providing you with stunning and affordable results. From cabinets to marble,
      granite, and/or quartz countertops, to flooring and lighting, our experts will precisely craft a beautiful and
      functional room that you'll never want to leave!`

    const paragraphTwo = `Our experts will offer you a vast and diverse range of trending layouts and styles to choose
      from. You choose your desired styles and wants, inform us of the customizations, and we'll take it from there and
      will transform your kitchen into the most engaging and attractive space in your home.`;

    const paragraphThree = 
      <>
        Feel free to give us a call at <Link className="text-[#F98500]" to="tel:1-800-555-6666">1-800-555-6666</Link> for
        a 100% free consultation, or visit our <Link className="text-[#F98500]" to="/gallery"> gallery</Link> first to
        get inspiration from some awesome projects which can quickly become a reality!
      </>;

    return [paragraphOne, paragraphTwo, paragraphThree];
  };

  return (
    <section>
      <Content
        cta
        ctaText="Get Free Estimate"
        heading="Dream Kitchens"
        imageAlt="Kitchen remodeling"
        imageUrl={kitchenRemodelUrl}
        mainContent={mainContent()}
      />
    </section>
  );
}
