import useWindowSize from "~/hooks/useWindowSize";

import ContactModal from "./ContactModal";

interface Props {
  contentClass?: string;
  contentReverse?: boolean;
  cta?: boolean;
  ctaText: string;
  heading: string;
  imageAlt: string;
  imageUrl: string;
  mainContent: Array<any>;
}

export default function Content({ contentReverse, cta, ctaText, heading, contentClass, imageAlt, imageUrl, mainContent }: Props) {

  const { width } = useWindowSize();

  return (
    <article className={`flex ${width < 768 ? `flex-col-reverse` : ``} ${contentReverse ? `md:flex-row-reverse` : `md:flex-row`} `}>
      <div className={`flex flex-1 flex-col ${contentClass}`}>
        <div className="flex flex-1 flex-col justify-evenly px-4 [&>*]:text-center [&>*]:md:text-left">
          <h1 className="px-4 pb-8 pt-4 font-['Open_Sans'] text-4xl font-semibold">{heading}</h1>
          {mainContent.map((content: string, index: number) => (
            <p key={index} className="px-4 py-2 font-['Open_Sans'] text-lg font-light leading-8">
              {content}
            </p>
          ))}
          {cta && <ContactModal ctaText={ctaText} />}
        </div>
      </div>
      <figure className="flex flex-1 self-stretch">
        <img alt={imageAlt} className="w-full" src={imageUrl} />
      </figure>
    </article>
  );
}
