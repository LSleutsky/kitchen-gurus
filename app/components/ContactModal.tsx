import { useState } from "react";
import Button from "./Button";
import ContactForm from "./ContactForm";
import CloseIcon from "@mui/icons-material/Close";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';

interface Props {
  className?: string;
  ctaText: string;
}

const baseMaterialModalStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  pb: 2
};

export default function ContactModal({ className, ctaText }: Props) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box component="div" className={className}>
      <Modal
        aria-labelledby="Kitchen Gurus Contact Modal"
        aria-describedby="Contact Kitchen Gurus for a 100% Free Estimate"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={baseMaterialModalStyles}>
            <Box component="div" className="flex flex-col-reverse justify-between items-center bg-[#51A655] px-6 py-4 md:flex-row">
              <Box component="h2" className="text-2xl text-white font-['Open_Sans'] sm:text-3xl">{ctaText}</Box>
              <Box component="span" className="self-end">
                <CloseIcon className="cursor-pointer text-white" fontSize="large" onClick={handleCloseModal} />
              </Box>
            </Box>
            <ContactForm />
          </Box>
        </Fade>
      </Modal>
      <Button className="mx-4 mt-6 self-center p-4 md:self-start" text={ctaText} onClick={handleOpenModal} />
    </Box>
  );
}
