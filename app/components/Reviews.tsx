import { Link } from "react-router";

interface Props {
  className?: string;
  imgAlt: string;
  imgSrc: string;
  review: string;
  reviewer: string;
  url: string;
}

export default function Reviews({ className, imgAlt, imgSrc, review, reviewer, url }: Props) {
  return (
    <span className={`${className} px-4`}>
      <Link to={url} target="_blank">
        <img className="m-auto my-0" alt={imgAlt} src={imgSrc} />
      </Link>
      <p className="text-center font-['Open_Sans']">{review}</p>
      <p className="mt-2 text-center text-[#F98500]">{`- ${reviewer}`}</p>
    </span>
  );
}
