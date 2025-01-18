import type { Route } from './+types/home';
import { Link } from 'react-router';
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
          <div className="flex flex-col px-8 py-4 [&>*]:text-center [&>*]:md:text-left">
            <h1 className="px-6 pb-12 text-4xl font-['Open_Sans'] font-semibold">Dream Kitchens</h1>
            <p className="leading-8 px-6 font-['Open_Sans'] font-light text-lg">
              {`Kitchen Gurus is one of the leading companies for kitchen remodeling needs in ${displayLocation()}. We will
              professionally and responsibly complete all your kitchen makeover alterations, and be there every step of the
              way in providing you with stunning and affordable results. From cabinets to marble, granite, and/or quartz
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
              Feel free to give us a call at <Link className="text-[#F98500]" to="tel:1-800-555-6666">1-800-555-6666</Link> and
              tell us your ideas, or visit our <Link className="text-[#F98500]" to="/gallery"> gallery</Link> to get your own
              inspiration from some awesome projects!
            </p>
            <button className="mx-6 mt-10 p-4 self-center md:self-start border-2 border-[#F98500] w-max bg-[#F98500] hover:bg-transparent">
              Get Free Estimate
            </button>
          </div>
        </div>
        <figure className="flex flex-1 self-stretch">
          <img src={kitchenRemodelUrl} alt="Kitchen remodeling" />
        </figure>
      </article>
    </section>
  );
}
