import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kitchen Gurus" },
    { name: "description", content: "Welcome to Kitchen Gurus!" },
  ];
}

export default function Home() {
  return (
    <section>
      <div className="bg-[url('https://kitchengurus.imgix.net/kitchen-remodeling.png')] bg-cover bg-no-repeat bg-center h-[60vh] relative overflow-hidden">
        <div className="bg-[#F98500] w-7/12 h-full absolute -right-[24%] md:-right-[14%] skew-x-[20deg] opacity-50 content=['']" />
      </div>
    </section>
  );
}
