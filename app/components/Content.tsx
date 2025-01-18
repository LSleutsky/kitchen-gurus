import Button from "./Button";
import { useWindowSize } from '~/hooks/useWindowSize';

interface Props {
  contentReverse?: boolean;
  cta?: boolean;
  ctaText: string;
  heading: string;
  imageAlt: string;
  imageUrl: string;
  mainContent: any;
}

export default function Content({ contentReverse, cta, ctaText, heading, imageAlt, imageUrl, mainContent }: Props) {
  const { width } = useWindowSize();

  return (
    <article
      className={`flex
        ${width < 768 ? 'flex-col-reverse' : 'flex-col'}
        ${contentReverse ? 'md:flex-row-reverse' : 'md:flex-row'}
      `}
    >
      <div className="flex flex-col flex-1 justify-evenly py-4 pb-8">
        <div className="flex flex-col [&>*]:text-center [&>*]:md:text-left">
          <h1 className="px-4 pt-4 pb-8 text-4xl font-['Open_Sans'] font-semibold">{heading}</h1>
          {mainContent.map((content: string, index: number) => (
            <p key={index} className="leading-8 px-4 py-2 font-['Open_Sans'] font-light text-lg">
              {content}
            </p>
          ))}
          {cta && <Button className="self-center md:self-start" text={ctaText} />}
        </div>
      </div>
      <figure className="flex flex-1 self-stretch">
        <img className="w-full" src={imageUrl} alt={imageAlt} />
      </figure>
    </article>
  );
}