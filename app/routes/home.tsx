import { Link } from "react-router";

import AddTaskIcon from '@mui/icons-material/AddTask';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HouseIcon from '@mui/icons-material/House';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

import Content from "~/components/Content";

import { displayLocation, getImageParameters } from "~/utils";

import type { Route } from "./+types/home";

interface OurProcessData {
  title: string;
  content: string;
  icon: React.JSX.Element;
}

const ourProcessIconStyles = {
  '&.MuiSvgIcon-root': {
    fontSize: `48px`
  }
}

const ourProcessData: OurProcessData[] = [
  {
    icon: <PhoneInTalkIcon sx={ourProcessIconStyles} />,
    title: `Step 1`,
    content: `Consultation Call`
  },
  {
    icon: <HouseIcon sx={ourProcessIconStyles} />,
    title: `Step 2`,
    content: `On-Site Visit & Design`
  },
  {
    icon: <EngineeringIcon sx={ourProcessIconStyles} />,
    title: `Step 3`,
    content: `Meet With Technicians`
  },
  {
    icon: <AddTaskIcon sx={ourProcessIconStyles} />,
    title: `Step 4`,
    content: `Hire With Trust`
  }
];

export function meta({}: Route.MetaArgs) {
  return [{ title: `Kitchen Gurus` }, { name: `description`, content: `Welcome to Kitchen Gurus!` }];
}

export default function Home() {
  const kitchenRemodelUrl = getImageParameters(`bcfe92d3-dbf2-4fe7-b383-45a3cf74e4f0`, `1200x760`);
  const secondKitchenRemodelUrl = getImageParameters(`7615789b-aba6-4cbc-be53-f7632a052cd3`, `1200x760`);
  const thirdKitchenRemodelUrl = getImageParameters(`14aeb5e2-1d76-4bcd-868b-0bdf32cb42b9`, `1200x760`);

  const dreamKitchensContent = () => {
    const paragraphOne = `Kitchen Gurus is one of the leading companies for kitchen remodeling needs in
      ${displayLocation(true)}. We will professionally and responsibly complete all of your kitchen makeover alterations,
      and be there every step of the way in providing you with stunning and affordable results. From cabinets to marble,
      granite, and/or quartz countertops, to flooring and lighting, our experts will precisely craft a beautiful and
      functional room that you"ll never want to leave!`;

    const paragraphTwo = `Our experts will offer you a vast and diverse range of trending layouts and styles to choose
      from. You choose your desired styles and wants, inform us of the customizations, and we"ll take it from there and
      will transform your kitchen into the most engaging and attractive space in your home.`;

    const paragraphThree = (
      <span>
        Feel free to give us a call at
        <Link className="text-[#F98500]" to="tel:1-800-555-6666">
          {` 1-800-555-6666 `}
        </Link>
        for a <span className="italic">100% free consultation</span>, or check out our
        <Link className="text-[#F98500]" to="/gallery">
          {` gallery `}
        </Link>
        first to get inspiration from some awesome projects which can quickly become a reality!
      </span>
    );

    return [paragraphOne, paragraphTwo, paragraphThree];
  };

  const yearsOfExperienceContent = () => {
    const paragraphOne = `Kitchen Gurus has been making your dream kitchen a reality for many years. We have successfully
      completed thousands of projects, having delighted tons of happy customers. We carefully vet and train all of
      our technicians to provide the utmost service, top industry know-how, and the most precise customizations possible.`;

    const paragraphTwo = `We are a full service kitchen remodeling organization, and have been creating striking masterpieces
      in our client's homes each and every project, having received countless 5-star reviews and even more word-of-mouth
      feedback. Our kitchen transformation potential is unmatched, and has a proven track record!`;

    const paragraphThree = (
      <span>
        From our first <em>hello</em> to our last <em>goodbye</em>, from initial estimation to completion, you will be
        completely at ease - and more importantly, in awe - at the seamless transition from phase to phase, and your decision to
        hire Kitchen Gurus will be one you will <em>never</em> regret!
      </span>
    );

    return [paragraphOne, paragraphTwo, paragraphThree];
  };

  const attentionToDetailContent = () => {
    const paragraphOne = `Kitchen Gurus creativity, professionalism, and hard work have cemented us on the list of one of the
      best kitchen remodeling companies in ${displayLocation()}. We are firm believers in listening to all of your ideas, sprinkling
      in some of our suggestions, and then producing unique designs customized and tailored to your preferences`;

    const paragraphTwo = `We employ only the highest-skilled laborers and technicians who are truly committed to offering top
      quality and superior work. Every step of your remodeling project will be completed to the very highest standards, from the
      best materials to precise construction craft.`;

    const paragraphThree = `Our team can confidently say that the final results from your kitchen project will far exceed your
      expectations. We simply do not worry about competitors in this field, because our process is unmatched, and the results speak
      for themselves.`;

    return [paragraphOne, paragraphTwo, paragraphThree]
  };

  return (
    <div>
      <section>
        <Content
          cta
          contentClass="py-6"
          ctaText="Get a Free Estimate"
          heading="Dream Kitchens"
          imageAlt="Light kitchen cabinets and countertops"
          imageUrl={kitchenRemodelUrl}
          mainContent={dreamKitchensContent()}
        />
      </section>
      <section>
        <Content
          contentReverse
          cta
          contentClass="py-6"
          ctaText="Schedule an Appointment"
          heading="Years of Experience"
          imageAlt="Fresh blue kitchen cabinets"
          imageUrl={secondKitchenRemodelUrl}
          mainContent={yearsOfExperienceContent()}
        />
      </section>
      <section className="pb-6 md:pb-0">
        <Content
          cta
          contentClass="md:py-6"
          ctaText="Setup a Meeting"
          heading="Attention to Detail"
          imageAlt="Marble kitchen island and tile backsplash"
          imageUrl={thirdKitchenRemodelUrl}
          mainContent={attentionToDetailContent()}
        />
      </section>
      <section className="bg-[#F7F7F7] font-['Open_Sans'] pb-6">
        <h1 className="text-center text-4xl font-semibold py-6">
          Our Process
        </h1>
        <h2 className="text-center mx-6 pb-6">
          {`Our process is streamlined to analyze your requirements according to your interests and
          preferences. We work through every perspective of renovation to provide you with the
          tranquil space you've always desired for your home.`}
        </h2>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4 mx-6">
          {ourProcessData.map((data: OurProcessData, index: number) => (
            <div key={index} className="flex flex-col justify-evenly bg-white border-2 border-[#51A655] mx-2 text-center font-['Open_Sans']">
              <h3 className="text-2xl text-white py-2 bg-[#51A655]">{data.title}</h3>
              <span className="py-4">{data.icon}</span>
              <p className="pb-2">{data.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
