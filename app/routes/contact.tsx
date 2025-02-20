import { useEffect, useState } from "react";
import { Link } from "react-router";

import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';

import type { SnackbarCloseReason, SnackbarOrigin } from '@mui/material/Snackbar';

import ContactForm from "~/components/ContactForm";
import Submission from "~/components/Submission";

import useWindowSize from "~/hooks/useWindowSize";

import { displayLocation } from "~/utils";
import type { LocationData, MetaData } from '~/utils/constants';
import { locationData, metaData } from '~/utils/constants';

import type { Route } from "./+types/contact";

interface SnackbarState extends SnackbarOrigin {
  open: boolean;
}

export function meta({ matches }: Route.MetaArgs): MetaData | object {
  const loaderData = matches.find(match => match?.id === `layouts/layout`)?.data;

  return [
    { title: `Contact Us | Kitchen Gurus` },
    { name: `description`, content: `Contact Kitchen Gurus` },
    {
      name: `keywords`,
      content: `kitchen makeovers, contemporary kitchen, kitchen floor plan, cost to redo kitchen, renovate kitchen, remodeling contractor, average cost to renovate kitchen, kitchen makeover, kitchen redesign, kitchen cabinets ${displayLocation(loaderData, true)}, ${displayLocation(loaderData)} kitchen remodel, ${displayLocation(loaderData, true)} kitchen remodeling`
    },
    { name: `og:title`, content: `Contact Us | Kitchen Gurus` },
    { name: `og:description`, content: `Kitchen Gurus is your trusted kitchen renovation partner! Trust us to meet your every remodeling need` },
    ...metaData
  ];
}

export default function Contact() {
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState<boolean>(false);
  const [isContactFormSuccessfullySubmitted, setIsContactFormSuccessfullySubmitted] = useState<boolean>(false);
  const { width } = useWindowSize();

  const [snackbarState, setSnackbarState] = useState<SnackbarState>({
      open: false,
      vertical: `top`,
      horizontal: `center`
    });

  const handleContactFormSubmitState = (state: boolean) => setIsContactFormSubmitted(state);
  const handleContactFormSubmitSuccessState = (state: boolean) => setIsContactFormSuccessfullySubmitted(state);

  const handleOpenSnackbar = (newSnackbarState: SnackbarOrigin) =>
      setSnackbarState({ ...newSnackbarState, open: true });

  const handleCloseSnackbar = (_: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === `clickaway`) return;

    setSnackbarState({ ...snackbarState, open: false });
  }

  const { horizontal, open, vertical } = snackbarState;

  useEffect(() => {
    if (isContactFormSuccessfullySubmitted) {
      handleOpenSnackbar({ vertical: `top`, horizontal: `center` });
    }

    if (isContactFormSubmitted && !isContactFormSuccessfullySubmitted)
      handleOpenSnackbar({ vertical: `top`, horizontal: `center` });
  }, [isContactFormSubmitted, isContactFormSuccessfullySubmitted]);

  return (
    <section className="flex flex-col justify-between p-8 pb-0 font-['Open_Sans'] md:flex-row">
      <div className="w-full md:w-6/12">
        <ContactForm
          handleContactFormSubmission={handleContactFormSubmitState as any}
          handleContactFormSuccessSubmission={handleContactFormSubmitSuccessState as any}
        />
      </div>
      <aside className="w-full text-center pt-4 md:pt-0 md:w-5/12 md:text-left">
        <h2 className="text-4xl font-semibold">Get In Touch</h2>
        <p>
          {`We'd love to hear from you! Whether you have questions, concerns, feedback, or just want to leave us a note,
          feel free to reach out to us anytime, day or night. If you use our contact form ${width < 768 ? `above` : `to the left`},
          we'll do our best to get back to you within 24 hours.`}
        </p>
        <div className="my-8">
          <span className="flex justify-center items-center mt-6 md:justify-start">
            <EmailIcon />
            <h3 className="text-2xl ml-2 font-semibold">Email Us</h3>
          </span>
          <Link className="text-[#F98500] text-xl md:ml-8" to="mailto:kitchengurusinc@gmail.com">
            kitchengurusinc@gmail.com
          </Link>
        </div>
        <div className="my-8">
          <span className="flex justify-center items-center mt-6 md:justify-start">
            <PhoneIcon />
            <h3 className="text-2xl ml-2 font-semibold">Call Us</h3>
          </span>
          <Link className="text-[#F98500] text-xl md:ml-8" to="tel:1-800-834-6584">
            1-800-834-6584
          </Link>
        </div>
        <div className="mt-8">
          <span className="flex justify-center items-center mt-6 md:justify-start">
            <MapIcon />
            <h3 className="text-2xl ml-2 font-semibold">Our Locations</h3>
          </span>
          <span className="flex flex-col [&>*]:mb-2">
            {locationData.map((location: LocationData, index) => (
              <Link
                key={index}
                className="text-[#F98500] text-xl md:ml-8"
                target="_blank"
                to={location.url}
              >
                {location.location}
              </Link>
            ))}
          </span>
        </div>
      </aside>
      <Submission
        handleCloseSnackbar={handleCloseSnackbar}
        horizontal={horizontal}
        isSuccessfullySubmitted={isContactFormSuccessfullySubmitted}
        open={open}
        vertical={vertical}
      />
    </section>
  );
}
