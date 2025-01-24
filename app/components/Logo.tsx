import { Link } from "react-router";

interface Props {
  action?: () => void;
  alt: string;
  className?: string;
  src: string;
}

export default function Logo({ action, alt, className, src }: Props) {
  return (
    <figure className={`${className} max-h-32 min-w-28 max-w-60 py-2`}>
      <Link to="/" onClick={action}>
        <img alt={alt} className="block w-full dark:block" src={src} onClick={action} />
      </Link>
    </figure>
  );
}
