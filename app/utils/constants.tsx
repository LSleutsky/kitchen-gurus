import AddTaskIcon from '@mui/icons-material/AddTask';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FacebookIcon from '@mui/icons-material/Facebook';
import HouseIcon from '@mui/icons-material/House';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

import type { SnackbarOrigin } from '@mui/material/Snackbar';

import Bullseye from '~/components/svg/Bullseye';
import HandShake from '~/components/svg/Handshake';
import Ribbon from "~/components/svg/Ribbon";
import StarUser from "~/components/svg/StarUser";

export interface AboutUsData {
  content: string;
  icon: React.JSX.Element;
  title: string;
}

export interface FinancingData {
  alt: string;
  src: string;
  url: string;
  info: string[];
}

export interface FormInputTarget {
  [key: string]: any;
}

export interface QuickLinksData {
  header: string;
  footer: string;
  reasons: any;
}

export interface LocationData {
  backgroundColor: string;
  cityStateZip: string;
  iconColor: string;
  location: string;
  streetAddress: string;
  url: string;
}

export interface NavLinks {
  route: string;
  text: string;
}

export interface OurProcessData {
  title: string;
  content: string;
  icon: React.JSX.Element;
}

export interface RatingData {
  alt: string;
  src: string;
  url: string;
}

export interface ReviewsData {
  imgAlt: string;
  imgSrc: string;
  review: string;
  reviewer: string;
  url: string
}

export interface ServiceOptions {
  value: string;
  label: string;
}

export interface SnackbarState extends SnackbarOrigin {
  open: boolean;
}

export interface SocialMediaOptions {
  icon: React.JSX.Element;
  name: string;
  url: string;
}

export interface TestimonialsData {
  name: string;
  location?: string;
  testimonial: string;
}

export interface UserLocationData {
  city: string;
  state: string;
}

export const aboutUsData: AboutUsData[] = [
  {
    content: `Our team of experts aim to achieve the utmost standards and provide the best level of care in designing
      and remodeling your dream kitchen.`,
    icon: <Bullseye />,
    title: `Our Mission`
  },
  {
    content: `We prioritize and precisely plan your renovation project, stay within budget, and manage our every
      move to keep costs manageable.`,
    icon: <HandShake />,
    title: `On Budget`
  },
  {
    content: `We have the necessary experience, manpower, and resources to ensure the project runs flawlessly. We ensure
      that every project is completed on time.`,
    icon: <StarUser />,
    title: `Saving Time`
  },
  {
    content: `We never overlook the quality of our work, and only utilize the finest materials and modern methods to
      guarantee a stellar remodeling job for you.`,
    icon: <Ribbon />,
    title: `Notable Quality`
  }
];

export const bannerImages = [
  { id: 1, slug: `abfb8500-2160-4798-ba8f-11e6bf606870` },
  { id: 2, slug: `6d99280e-439d-40ab-9513-142d9aa0b6e0` },
  { id: 3, slug: `a1099375-2c11-4824-9c13-28b22de109cf` },
  { id: 4, slug: `79c7168d-a17f-462f-81b8-e5d53a9ba6d2` },
  { id: 5, slug: `06a96622-c502-4185-a741-954b82cbe04c` },
  { id: 6, slug: `025efa1d-8da6-4710-8b09-c1d7e36e96a4` },
  { id: 7, slug: `85bdd67c-a59b-4a58-b2ae-7d7cae602c00` },
  { id: 8, slug: `50c57926-b3ac-4053-b7ce-d78546574858` },
];

export const financingData: FinancingData[] = [
  {
    alt: `Foundation Finance Company`,
    src: `/foundation-financing.png`,
    url: `https://portal.foundationfinance.com/links/JRdlQdCnsLmrLcujdRwrYQ9nQi0nQhhclMBEIP5lJW4=`,
    info: [
      `Foundation Finance has some of the lowest interest rates available.`,
      `Loan options for low, medium, and high credit scores.`,
      `Available in DE - MD - PA`
    ]
  },
  {
    alt: `Mariner Finance`,
    src: `/mariner-financing.webp`,
    url: `https://www.tciconnection.com/internetApp/marinerfinance/application/get_started.action`,
    info: [
      `Mariner has several locations throughout the Tristate area to serve you.`,
      `Mariner offers 0% Financing for the first 12 months.`,
      `They're known for their high approval rates.`,
      `Available in DE - MD - NJ - PA`
    ]
  },
  {
    alt: `Enhancify`,
    src: `/enhancify-logo.webp`,
    url: `https://www.enhancify.com/basement-gurus`,
    info: [
      `Enhancify offers 0% interest for qualified customers as well as HELOC loans!`,
      `Loan options for all credit scores.`,
      `Available in DE - MD - NJ - PA`
    ]
  }
];

export const formValidationRules = (key: string) => {
  switch (key) {
    case `email`:
      return {
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: `Please enter a valid email address`
        }
      };
    case `firstName`:
      return {
        required: `First name is required`
      };
    case `lastName`:
      return {
        required: `Last name is required`
      };
    case `phoneNumber`:
      return {
        required: `Phone number is required`,
        pattern: {
          // second pattern conditional is to account for browser autofill not reading phone number input value properly
          value: /^\(?([0-9]{3})\)?[ ]([0-9]{3})[-]([0-9]{4})$|^\d{10}$/,
          message: `A valid 10 digit phone number is required`
        }
      };
  }
};

export const licensedInsuredData: QuickLinksData = {
  header: `At Kitchen Gurus, we strongly hiring licensed and insured experts for any services related to remodeling for several reasons.`,
  footer: `By hiring licensed and insured experts for services related to your home, you can be assured that the work will be done safely, efficiently,
    and to the highest standard. It also provides peace of mind, knowing that you and your property are protected from any liabilities that may
    arise during the project.`,
  reasons: [
    `Firstly, licensed and insured experts have the expertise and knowledge to handle specific tasks related to kitchen remodeling projects.
      They are trained and certified to identify and address underlying problems such as architecture, dimensions, and support systems
      using the latest tools and techniques, ensuring high-quality workmanship that meets or exceeds industry standards.`,
    `Secondly, working any remodeling job can be potentially dangerous, especially if there are intricate and specific criteria. Licensed and insured
      experts have the necessary safety training and equipment to ensure that the work is done safely without accidents or injuries.`,
    `Thirdly, licensed and insured experts carry liability insurance that protects you and your property in case of any accidents or damage that
      may occur during the project. This means that you won't be held responsible for any damages or injuries that may arise during the project.`
  ]
};

export const locationData: LocationData[] = [
  {
    backgroundColor: `#475B48`,
    cityStateZip: `Lancaster, PA 17601`,
    iconColor: `#C13E33`,
    location: `LANCASTER, PA`,
    streetAddress: `2384 Harrisburg Pike`,
    url: `https://www.google.com/localservices/prolist?spp=Cg0vZy8xMXEyN2R6cnJq&scp=CgAaEkJhc2VtZW50IEd1cnVzIExMQyoSQmFzZW1lbnQgR3VydXMgTExD&q=Basement+Gurus+LLC&src=2&slp=UhUIARIREg8iDS9nLzExcTI3ZHpycmo`
  },
  {
    backgroundColor: `#51A655`,
    cityStateZip: `Southampton, PA 18966`,
    iconColor: `#E0AA25`,
    location: `SOUTHAMPTON, PA`,
    streetAddress: `55 2nd Street Pike`,
    url: `https://www.google.com/maps/place/Basement+Gurus/@40.0770267,-75.0837746,759m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c6b1d00267f5b7:0xc3c464130b250006!8m2!3d40.0770267!4d-75.0837746!16s%2Fg%2F11j8t98r79?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D`
  },
  {
    backgroundColor: `#83A885`,
    cityStateZip: `Philadelphia, PA 19111`,
    iconColor: `#19242D`,
    location: `GREATER PHILADELPHIA`,
    streetAddress: `431 Rhawn St.`,
    url: `https://www.google.com/localservices/prolist?spp=Cg0vZy8xMWo4dDk4cjc5&scp=CgAaDkJhc2VtZW50IEd1cnVzKg5CYXNlbWVudCBHdXJ1cw%3D%3D&q=Basement+Gurus&src=2&slp=UhUIARIREg8iDS9nLzExajh0OThyNzk`
  },
  {
    backgroundColor: `#475B48`,
    cityStateZip: `Wilmington, DE 19804`,
    iconColor: `#C13E33`,
    location: `WILMINGTON, DE`,
    streetAddress: `244 W. Champlain Ave`,
    url: `https://www.google.com/localservices/prolist?spp=Cg0vZy8xMWZ2NnBtc3l4&scp=CgAaEkJhc2VtZW50IEd1cnVzIExMQyoSQmFzZW1lbnQgR3VydXMgTExD&q=Basement+Gurus+LLC&src=2&slp=UhUIARIREg8iDS9nLzExZnY2cG1zeXg%3D`
  }
];

export const navLinks: NavLinks[] = [
  {
    route: `/`,
    text: `Home`,
  },
  {
    route: `/gallery`,
    text: `Gallery`,
  },
  {
    route: `/services`,
    text: `Other Services`,
  },
  {
    route: `/about`,
    text: `About Us`,
  },
  {
    route: `/contact`,
    text: `Contact Us`,
  },
];

const ourProcessIconStyles = {
  '&.MuiSvgIcon-root': {
    fontSize: `48px`
  }
}

export const ourProcessData: OurProcessData[] = [
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

export const affordableExperiencedData: QuickLinksData = {
  header: `At Kitchen Gurus, we understand that our clients want affordable, honest, and experienced services when it comes to their
    kitchen remodeling needs. That's why we prioritize these values in every aspect of our work.`,
  footer: `Choosing affordable, honest, and experienced services for your home's needs ensures that you get the best value for your
    investment. At Kitchen Gurus, we strive to exceed our clients' expectations and provide them with peace of mind knowing that their
    home is in good hands!`,
  reasons: [
    `Affordability: We believe that high-quality services should be accessible to everyone. That's why we offer competitive pricing
      without sacrificing the quality of our work. We also offer financing options to help make our services more affordable for our clients.`,
    `Honesty: We believe in transparency and honesty in all of our dealings with our clients. We provide clear and detailed explanations of
      the work that needs to be done and why. We also offer a free inspection and estimate so that our clients can make informed decisions about
      their kitchen remodeling needs.`,
    `Experience: Our team of licensed and insured experts has years of experience in the industry. We have encountered a wide range of issues
      and have the knowledge and skills to handle any situation. We also keep up-to-date with the latest industry standards and techniques to
      ensure that our services are top-notch.`
  ]
};

export const ratingData: RatingData[] = [
  {
    alt: `Angi Rating`,
    src: `/angi-rating.png`,
    url: `https://www.angi.com/companylist/us/pa/philadelphia/basement-gurus-reviews-9964580.htm`
  },
  {
    alt: `BBB Rating`,
    src: `/bbb-rating.png`,
    url: `https://www.bbb.org/us/pa/feasterville-trevose/profile/basement-waterproofing/basement-gurus-llc-0241-236056063`
  },
  {
    alt: `Build Zoom Rating`,
    src: `/build-zoom-rating.png`,
    url: `https://www.buildzoom.com/contractor/basement-gurus-llc`
  },
  {
    alt: `Chamber of Commerce Rating`,
    src: `/chamber-of-commerce-rating.png`,
    url: `https://www.chamberofcommerce.com/business-directory/delaware/wilmington/waterproofing-company/40092781-basement-gurus-llc?source=memberwebsite`
  },
  {
    alt: `Craft Jack Rating`,
    src: `/craft-jack-rating.png`,
    url: `https://yourmatches.improvenet.com/profile/details/306602?hash=preview`
  },
  {
    alt: `Facebook Rating`,
    src: `/facebook-rating.png`,
    url: `https://www.facebook.com/basementgurus/`
  },
  {
    alt: `Google Rating`,
    src: `/google-rating.png`,
    url: `https://www.google.com/maps/place//data=!4m2!3m1!1s0x89c6b1d00267f5b7:0xc3c464130b250006?source=g.page.share`
  },
  {
    alt: `Home Advisor Rating`,
    src: `/home-advisor-rating.png`,
    url: `https://www.homeadvisor.com/rated.BasementGurus.97478986.html`
  },
  {
    alt: `Neighborhood Faves Rating`,
    src: `/neighborhood-faves-rating.png`,
    url: `https://nextdoor.com/pages/basement-gurus-philadelphia-pa/`
  },
  {
    alt: `Porch Rating`,
    src: `/best-of-porch-rating.png`,
    url: `https://pro.porch.com/philadelphia-pa/waterproofing-contractors/basement-gurus/pp`
  },
  {
    alt: `Thumbtack Top Pro Rating`,
    src: `/top-pro-rating.png`,
    url: `https://www.thumbtack.com/pa/lancaster/waterproofing/basement-gurus/service/388863440970604554`
  }
];

export const reviewsData: ReviewsData[] = [
  {
    imgAlt: `Google Reviews logo`,
    imgSrc: `/google-reviews.png`,
    review: `I was very pleased with the work Basement Gurus recently did at our home. They were very professional and even
      finished within a day! Armand and his crew did some awesome work. Josh really helped explaining everything
      clearly about how the procedure would work and the materials being used. I would highly recommend Basement Gurus
      to waterproof your basement.`,
    reviewer: `Andrew S.`,
    url: `https://g.co/kgs/iXh4VY6`
  },
  {
    imgAlt: `Yelp Reviews logo`,
    imgSrc: `/yelp-reviews.png`,
    review: `Awesome staff and service! purchased a home recently that didn't pass inspection completely and had to get the
      columns redone and a crack repaired in the foundation. Josh was so diligent in assisting me, going above and
      beyond to help me get a credit from the sellers to pay for it. Once the work began, I experienced professionalism
      from Ms. Cassie and Ms. Boni which I cannot even put into words.`,
    reviewer: `Miss V.`,
    url: `https://www.yelp.com/biz/basement-gurus-philadelphia#reviews`
  },
  {
    imgAlt: `Angi Reviews logo`,
    imgSrc: `/angi-reviews.png`,
    review: `Great! We are very happy with Phil Thistle and his team at Basement Gurus. They were very professional and
      efficient. Our basement, which had been flooding with every heavy rain, is now bone dry! Their price was
      very competitive and it was a pleasure to work with their company. Highly recommend!`,
    reviewer: `Jamie P.`,
    url: `https://www.angi.com/companylist/us/pa/philadelphia/basement-gurus-reviews-9964580.htm#reviews-section`
  }
];

export const serviceOptions: ServiceOptions[] = [
  { value: `cabinets`, label: `Cabinets` },
  { value: `lighting`, label: `Lighting` },
  { value: `flooring`, label: `Flooring` },
  { value: `fixtures`, label: `Fixtures` },
  { value: `appliances`, label: `Appliances` },
  { value: `custom`, label: `Custom` },
];

export const socialMediaActions: SocialMediaOptions[] = [
  { icon: <FacebookIcon />, name: `Facebook`, url: `https://www.facebook.com/basementgurus/` },
  { icon: <InstagramIcon />, name: `Instagram`, url: `https://www.instagram.com/basementguruu/` },
  { icon: <XIcon />, name: `X`, url: `https://x.com/basement_gurus` },
  { icon: <YouTubeIcon sx={{ fontSize: `32px` }} />, name: `YouTube`, url: `https://www.youtube.com/@basementgurus` }
];

export const testimonialsData: TestimonialsData[] = [
  {
    name: `Kathleen P.`,
    location: `Hatboro, PA`,
    testimonial: `“Basement Gurus exceeded my expectations. In addition to improving the drainage system around my basement,
    mold was removed and basement walls and ceiling was painted. An egress window was installed and the basement was put back
    in better condition than when the work was started.”`
  },
  {
    name: `Todd L.`,
    location: `Harrisburg, PA`,
    testimonial: `“After getting an estimate from another company, Basement Gurus offered us a much better system for a much lower
    price. We had a large and complicated job to do, and the crew finished it all beautifully. Since then, we've had several tropical
    storms, and not a drop of water in the house.”`
  },
  {
    name: `Paula B.`,
    location: `Millsboro, DE`,
    testimonial: `“I recently purchased my first home. The day of closing I did a walk-through and had mud and water in my basement.
    The seller and seller's realtor assured me that water problem in my basement would be resolved in 30 days.. That never
    happened, In my opinion this was the house from hell. I called 4 companies for estimates, quotes, and a review of my basement.
    Before leaving John Ford from Basement Gurus last words were Paula, Basement Gurus has your back. John really meant what he said, in fact,
    John was the only person who called me back after reviewing the basement to find out if I had any questions or if he needed to explain
    anything to me from the estimate that he wrote up for me. John also gave me his direct phone number and told me to call him anytime.
    Meanwhile, none of the other companies called me, so for that reason alone I really appreciated that. When John told me do not worry
    Paula I got your back. He really meant that. I guess the saying is true, it is not what someone says to you But how they made you feel.
    THE Gurus kept their promise! Thank you so much again, especially you John Ford.... I am so relieved. ”`
  },
  {
    name: `Troy D.`,
    location: `Wilmington, DE`,
    testimonial: `“For anyone looking to get waterproofing done in their home: I moved into my house about two years ago and would
    get floods in my basement during every storm. I tried to fix it myself environmentally but failed in my attempts. I then decided
    to finally fix the problem and get my basement waterproofed. Being relatively new to Delaware, I put in a request to get free
    estimates. I had a few companies come out to look at it and narrowed my choices down. I was down to Basement Waterproofing Specialists (BWS)
    and Basement Gurus. The difference was the representative from Basement Gurus had a more natural approach and took the time to ask numerous
    questions, as the other representatives asked little to no questions. The Basement Gurus representative suggested to fix internally AND
    externally, plus they even added a lateral system in my basement. No other company felt to even thought of a lateral systems or external
    drainage, or to even ask about it. I could not speak more highly of the representative and his team at Basement Gurus, they took the time to
    explain every step and the process before and during the installation to keep me involved with what was going on. The crew was extremely
    polite and respectful of my house, they were very efficient and they *did not play games* for lack of a better word. lol The very next day
    we had heavy rains, which I was excited to test out my waterproofing system! During and after it rained there was not even a single drop of
    water in my basement or laundry room. The representative even had his team remove and replace all of the studs that had become moldy and also
    put in new mold-resistant drywall. Basement Gurus treated us as if we were family and for anyone looking to get waterproofing done in their house,
    call Basement Gurus, they truly stand themselves apart from the competition!“`
  },
  {
    name: `Bacon B.`,
    location: `Philadelphia, PA`,
    testimonial: `“One of the best experiences I have had as a homeowner, hands down. In February 2020, we had a flood in our basement due to a clog
    in the sewage pipe. At the time, we did not realize that this had caused mold to spore. Our home started to have a strange smell and soon we made
    a realization that we had to do something about it. We remembered that we had previously been given a quote for waterproofing and mold remediation
    by the Basement Gurus (following excellent work we had done by Roof Gurus). They did not pressure us to do anything or try to up-sell. There was no
    icky/slimy sales rep feeling. Just natural, human connection with the customer's best interest in mind. These guys came in and gave us service at a
    fraction of the cost and ten times the friendliness of the larger competitors - no price gouging. Whenever I think of a home project, I will think
    of the Gurus (Roof Gurus, Basement Gurus etc.). They have always been willing to come give estimates or simply investigate an issue - even when it
    has turned out to be not 100% related their service area. I come from a 10 year background of customer service so trust me when I say these guys
    are the real deal. Quality work, quality products & excellent customer service that I will never forget.“`
  },
  {
    name: `Randy F.`,
    location: `Wilmington, DE`,
    testimonial: `“Dan and his team were both efficient and knowledgeable. They installed a french drain sump pump and made repairs to our footings at
    our residence three years ago and not a drop of water since then! Thats why we recommended them for the work we recently did at our church. The
    crew installed a complete system with two sumps and pumps in two days! From start to finish they did an outstanding job at competitive prices using
    quality materials. The clean up was amazing as well! Except for the new concrete, you would never know all of the work that was involved! I highly
    recommend Dan and the Basement Gurus for all of your water infiltration/foundation needs!!! You wont be disappointed!!!“`
  }
];
