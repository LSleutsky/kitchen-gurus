import { Link } from "react-router";

interface Props {
  action?: () => void;
  alt: string;
  src: string;
}

export default function Logo({ action, alt, src }: Props) {
  return (
    <div className='max-h-32 min-w-28 max-w-60 p-2'>
      <Link onClick={action} to='/'>
        <img
          className='block w-full dark:block'
          alt={alt}
          src={src}
          onClick={action}
        />
      </Link>
    </div>
  );
}
