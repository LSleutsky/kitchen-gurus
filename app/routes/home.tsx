import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Kitchen Gurus' },
    { name: 'description', content: 'Welcome to Kitchen Gurus!' },
  ];
}

export default function Home() {
  return (
    <section>
      <div
        className={`relative h-[60vh] overflow-hidden bg-[url('https://ucarecdn.com/98888d14-90cc-4dea-9402-961b4aaeec40/-/preview/1000x560/-/format/auto/-/quality/smart/')] bg-cover bg-center bg-no-repeat`}
      >
        <div className="content=[''] absolute -right-[24%] h-full w-7/12 skew-x-[20deg] bg-[#F98500] opacity-50 md:-right-[14%]" />
      </div>
    </section>
  );
}
