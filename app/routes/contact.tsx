import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Contact Us | Kitchen Gurus' },
    { name: 'description', content: 'Contact Kitchen Gurus' },
  ];
}

export default function Contact() {
  return (
    <>
      <h1>This is the Contact Page</h1>
    </>
  );
}
