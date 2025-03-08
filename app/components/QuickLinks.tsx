import ContactModal from "~/components/ContactModal";

import { getImageParameters } from "~/utils";
import type { QuickLinksData } from "~/utils/constants";

interface Props {
  header: string;
  footer: string;
  image: string;
  reasons: any;
}

export default function QuickLinks({ header, footer, image, reasons }: Props) {
  return (
    <>
      <div className="flex flex-col-reverse mx-4 md:flex-row">
        <figure className="w-full md:w-1/2">
          <img alt="" className="h-full w-full" src={getImageParameters(image)} />
        </figure>
        <section className=" flex w-full md:w-1/2">
          <article className="flex flex-col justify-center text-xl text-white text-left bg-[#51A655] p-6 leading-10">
          <p>{header}</p>
            <ul className="my-14 ml-5.5 list-disc">
              {reasons.map((reason: QuickLinksData, index: number) => (
                <li key={index}>
                  {reason as any}
                </li>
              ))}
            </ul>
          <p>{footer}</p>
          </article>
        </section>
      </div>
      <ContactModal buttonClassName="mb-2" className="flex justify-center" ctaText="Schedule a Free Estimate" />
    </>
  );
}
