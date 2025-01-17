import type { Route } from './+types/home';
import { getImageParameters } from '~/utils';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Kitchen Gurus' },
    { name: 'description', content: 'Welcome to Kitchen Gurus!' },
  ];
}

export default function Home() {
  const url = getImageParameters('98888d14-90cc-4dea-9402-961b4aaeec40');

  return (
    <section>
      <div className={`relative h-[60vh] overflow-hidden bg-[url('${url}')] bg-cover bg-center bg-no-repeat`}>
        <div className="content=[''] absolute -right-[24%] h-full w-7/12 skew-x-[20deg] bg-[#F98500] opacity-50 md:-right-[14%]" />
      </div>
      <h1 className="pt-3 text-center text-2xl font-semibold">A Unique Kitchen Remodeling Experience</h1>
    </section>
  );
}
