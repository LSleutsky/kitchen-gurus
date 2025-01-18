import type { Route } from './+types/home';
import { Link } from 'react-router';
import Button from '~/components/Button';
import { displayLocation, getImageParameters } from '~/utils';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Kitchen Gurus' },
    { name: 'description', content: 'Welcome to Kitchen Gurus!' },
  ];
}

export default function Home() {
  const kitchenRemodelUrl = getImageParameters('05b99b74-d97b-4943-af0e-708c2be57db4', '1200x760');

  return (
    <section>
      <article className="flex flex-col md:flex-row justify-end items-center">
        <div className="flex flex-col flex-1 justify-evenly py-4">
          <div className="flex flex-col [&>*]:text-center [&>*]:md:text-left">
            <h1 className="px-6 pt-4 pb-8 text-4xl font-['Open_Sans'] font-semibold">Dream Kitchens</h1>
            <p className="leading-8 px-6 font-['Open_Sans'] font-light text-lg">
              {`Kitchen Gurus is one of the leading companies for kitchen remodeling needs in ${displayLocation(true)}. We will
              professionally and responsibly complete all of your kitchen makeover alterations, and be there every step of
              the way in providing you with stunning and affordable results. From cabinets to marble, granite, and/or quartz
              countertops, to flooring and lighting, our experts will precisely craft a beautiful and functional room that
              you'll never want to leave!`}
            </p>
            <p className="leading-8 px-6 font-['Open_Sans'] font-light text-lg mt-6">
              Our experts will offer you a vast and diverse range of trending layouts and styles to choose from. You choose
              your desired styles and wants, inform us of the customizations, and we'll take it from there and will transform
              your kitchen into the most engaging and attractive space in your home.
            </p>
            <p className="leading-8 px-6 font-['Open_Sans'] font-light text-lg mt-6">
              {/* TODO: Update with actual Kitchen Gurus phone number */}
              Feel free to give us a call at <Link className="text-[#F98500]" to="tel:1-800-555-6666">1-800-555-6666</Link> for
              a 100% free consultation, or visit our <Link className="text-[#F98500]" to="/gallery"> gallery</Link> first to
              get inspiration from some awesome projects which can quickly become a reality!
            </p>
            <Button className="self-center md:self-start" text="Get Free Estimate" />
          </div>
        </div>
        <figure className="flex flex-1 self-stretch">
          <img src={kitchenRemodelUrl} alt="Kitchen remodeling" />
        </figure>
      </article>
    </section>
  );
}
