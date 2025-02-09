import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';

import type { SnackbarCloseReason, SnackbarOrigin } from '@mui/material/Snackbar';

import ContactForm from "~/components/ContactForm";
import Submission from "~/components/Submission";

import type { Route } from "./+types/home";

interface ContactFormRef {
  clearFormValues: () => void;
  clearServiceSelection: () => void;
}

interface LocationData {
  address: string;
  url: string;
}

interface SnackbarState extends SnackbarOrigin {
  open: boolean;
}

const locationData: LocationData[] = [
  {
    address: `Lancaster, PA`,
    url: `https://www.google.com/localservices/prolist?spp=Cg0vZy8xMXEyN2R6cnJq&scp=CgAaEkJhc2VtZW50IEd1cnVzIExMQyoSQmFzZW1lbnQgR3VydXMgTExD&q=Basement+Gurus+LLC&src=2&slp=UhUIARIREg8iDS9nLzExcTI3ZHpycmo`
  },
  {
    address: `Southampton, PA`,
    url: `https://www.google.com/maps/place/Basement+Gurus/@40.0770267,-75.0837746,759m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c6b1d00267f5b7:0xc3c464130b250006!8m2!3d40.0770267!4d-75.0837746!16s%2Fg%2F11j8t98r79?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D`
  },
  {
    address: `Philadelphia, PA`,
    url: `https://www.google.com/localservices/prolist?spp=Cg0vZy8xMWo4dDk4cjc5&scp=CgAaDkJhc2VtZW50IEd1cnVzKg5CYXNlbWVudCBHdXJ1cw%3D%3D&q=Basement+Gurus&src=2&slp=UhUIARIREg8iDS9nLzExajh0OThyNzk`
  },
  {
    address: `Wilmington, DE`,
    url: `https://www.google.com/localservices/prolist?spp=Cg0vZy8xMWZ2NnBtc3l4&scp=CgAaEkJhc2VtZW50IEd1cnVzIExMQyoSQmFzZW1lbnQgR3VydXMgTExD&q=Basement+Gurus+LLC&src=2&slp=UhUIARIREg8iDS9nLzExZnY2cG1zeXg%3D`
  }
];

export function meta({}: Route.MetaArgs) {
  return [{ title: `Contact Us | Kitchen Gurus` }, { name: `description`, content: `Contact Kitchen Gurus` }];
}

export default function Contact() {
  const contactFormRef = useRef<ContactFormRef>(null);
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState<boolean>(false);

  const [snackbarState, setSnackbarState] = useState<SnackbarState>({
      open: false,
      vertical: `top`,
      horizontal: `center`
    });

  const handleContactFormSubmitState = (state: boolean) => setIsContactFormSubmitted(state);

  const handleOpenSnackbar = (newSnackbarState: SnackbarOrigin) =>
      setSnackbarState({ ...newSnackbarState, open: true });

  const handleCloseSnackbar = (_: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === `clickaway`) return;

    setSnackbarState({ ...snackbarState, open: false });
  }

  const { horizontal, open, vertical } = snackbarState;

  useEffect(() => {
    if (isContactFormSubmitted) {
      contactFormRef?.current?.clearFormValues();
      contactFormRef?.current?.clearServiceSelection();
      handleOpenSnackbar({ vertical: `top`, horizontal: `center` });
    }
  }, [isContactFormSubmitted]);

  return (
    <section className="flex flex-col-reverse justify-between p-8 font-['Open_Sans'] md:flex-row">
      <div className="w-full md:w-6/12">
        <ContactForm
          ref={contactFormRef}
          handleContactFormSubmission={handleContactFormSubmitState as any}
        />
      </div>
      <aside className="w-full text-center md:w-5/12 md:text-left">
        <h2 className="text-4xl font-semibold">Get In Touch</h2>
        <p>
          {`We'd love to hear from you! Whether you have questions, concerns, feedback, or just want to leave us a note,
          feel free to reach out to us anytime, day or night. If you use our contact form, we'll do our best to get back to
          you within 24 hours.`}
        </p>
        <div className="my-8">
          <span className="flex justify-center items-center mt-6 md:justify-start">
            <EmailIcon />
            <h3 className="text-2xl ml-2 font-semibold">Email Us</h3>
          </span>
          <Link className="text-[#F98500] text-xl md:ml-8" to="mailto:kitchengurus@gmail.com">
            kitchengurus@gmail.com
          </Link>
        </div>
        <div className="my-8">
          <span className="flex justify-center items-center mt-6 md:justify-start">
            <PhoneIcon />
            <h3 className="text-2xl ml-2 font-semibold">Call Us</h3>
          </span>
          <Link className="text-[#F98500] text-xl md:ml-8" to="tel:1-800-555-6666">
            1-800-555-6666
          </Link>
        </div>
        <div className="my-8">
          <span className="flex justify-center items-center mt-6 md:justify-start">
            <MapIcon />
            <h3 className="text-2xl ml-2 font-semibold">Our Locations</h3>
          </span>
          <span className="flex flex-col [&>*]:mt-2">
            {locationData.map((location, index) => (
              <Link
                key={index}
                className="text-[#F98500] text-xl md:ml-8"
                target="_blank"
                to={location.url}
              >
                {location.address}
              </Link>
            ))}
          </span>
        </div>
      </aside>
      <Submission
        handleCloseSnackbar={handleCloseSnackbar}
        horizontal={horizontal}
        open={open}
        vertical={vertical}
      />
    </section>
  );
}
