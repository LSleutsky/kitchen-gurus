import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kitchen Gurus" },
    { name: "description", content: "Welcome to Kitchen Gurus!" },
  ];
}

export default function Home() {
  return (
    <>
      <h1>This is the Home Page</h1>
    </>
  );
}
