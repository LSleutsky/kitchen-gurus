import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us | Kitchen Gurus" },
    { name: "description", content: "About Kitchen Gurus" },
  ];
}

export default function About() {
  return (
    <>
      <h1>This is the About Page</h1>
    </>
  );
}
