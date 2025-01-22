import ContactModal from "./ContactModal";
import useWindowSize from "~/hooks/useWindowSize";

interface Props {
  contentReverse?: boolean;
  cta?: boolean;
  ctaText: string;
  heading: string;
  imageAlt: string;
  imageUrl: string;
  mainContent: Array<any>;
}

export default function Content({ contentReverse, cta, ctaText, heading, imageAlt, imageUrl, mainContent }: Props) {
  const { width } = useWindowSize();

  return (
    <article className={`flex ${width < 768 ? "flex-col-reverse" : "flex-col"} ${contentReverse ? "md:flex-row-reverse" : "md:flex-row"} `}>
      <div className="flex flex-1 flex-col justify-evenly py-4 pb-8">
        <div className="flex flex-col [&>*]:text-center [&>*]:md:text-left">
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
        <img className="w-full" src={imageUrl} alt={imageAlt} />
      </figure>
    </article>
  );
}
