import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kitchen Gurus" },
    { name: "description", content: "Welcome to Kitchen Gurus!" },
  ];
}

export default function Home() {
  return (
    <div>
      <div className="bg-[url('https://kitchengurus.imgix.net/kitchen-remodeling.png')] bg-cover bg-no-repeat bg-center h-[60vh]" />
    </div>
  );
}
