import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Gallery | Kitchen Gurus' },
    { name: 'description', content: 'Kitchen Gurus Gallery' },
  ];
}

const imageSources = [
  {
    id: 1,
    src: '/some-image-1',
    alt: 'Some alt text placeholder',
  },
  {
    id: 2,
    src: '/some-image-2',
    alt: 'Some alt text placeholder',
  },
  {
    id: 3,
    src: '/some-image-3',
    alt: 'Some alt text placeholder',
  },
  {
    id: 4,
    src: '/some-image-4',
    alt: 'Some alt text placeholder',
  },
];

export default function Gallery() {
  return (
    <>
      <h1 className='pt-5 text-center text-2xl font-semibold'>
        Explore our Gallery for a taste of our remodeling excellence
      </h1>
      <section className='grid gap-4 p-5 md:grid-cols-2 lg:grid-cols-4'>
        {imageSources.map(({ alt, id, src }) => (
          <figure key={id} className='h-[200px] bg-[#F98500]'>
            <img alt={alt} src={src} />
          </figure>
        ))}
      </section>
    </>
  );
}
