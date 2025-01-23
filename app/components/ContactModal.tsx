import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";

import Button from "./Button";
import ContactForm from "./ContactForm";

interface Props {
  className?: string;
  ctaText: string;
}

const baseMaterialModalStyles = {
  position: `absolute`,
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
  width: `80%`,
  bgcolor: `background.paper`,
  boxShadow: 24,
  pb: 2
};

export default function ContactModal({ className, ctaText }: Props) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box className={className} component="div">
      <Modal
        closeAfterTransition
        aria-describedby="Contact Kitchen Gurus for a 100% Free Estimate"
        aria-labelledby="Kitchen Gurus Contact Modal"
        open={openModal}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        slots={{ backdrop: Backdrop }}
        onClose={handleCloseModal}
      >
        <Fade in={openModal}>
          <Box sx={baseMaterialModalStyles}>
            <div className="flex flex-col-reverse items-center justify-between bg-[#51A655] px-6 py-4 md:flex-row">
              <h2 className="font-['Open_Sans'] text-2xl text-white sm:text-3xl">{ctaText}</h2>
              <span className="self-end">
                <CloseIcon className="cursor-pointer text-white" fontSize="large" onClick={handleCloseModal} />
              </span>
            </div>
            <ContactForm />
          </Box>
        </Fade>
      </Modal>
      <Button className="mx-4 mt-6 self-center p-4 cursor-pointer md:self-start" text={ctaText} onClick={handleOpenModal} />
    </Box>
  );
}
