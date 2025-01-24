import { useRef, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

import Box from "@mui/material/Box";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import Button from "./Button";
import ContactForm from "./ContactForm";
import Logo from "./Logo";

interface Props {
  className?: string;
  ctaText: string;
}

interface Ref {
  clearFormValues: () => void;
  clearSelectValues: () => void;
}

export default function ContactModal({ className, ctaText }: Props) {
  const contactFormRef = useRef<Ref>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box className={className} component="div">
      <Dialog
        fullScreen
        aria-labelledby="responsive-dialog-title"
        open={openModal}
        onClose={handleCloseModal}
      >
        <Box component="div" id="responsive-dialog-title">
          <div className="flex flex-col-reverse items-center justify-between bg-[#51A655] px-6 py-4 md:flex-row">
            <div className="flex flex-col items-center md:flex-row">
              <Logo action={handleCloseModal} alt="Kitchen Gurus logo" className="w-32 md:w-24" src="/kitchen-gurus-logo.png" />
              <h2 className="font-['Open_Sans'] text-2xl text-white text-center sm:text-3xl md:pl-2">{ctaText}</h2>
            </div>
            <span className="self-end md:self-center">
              <CloseIcon className="cursor-pointer text-white" fontSize="large" onClick={handleCloseModal} />
            </span>
          </div>
        </Box>
        <DialogContent sx={{
          '&.MuiDialogContent-root': {
            padding: `30px 24px 0 24px`
          }
        }}>
          <Box className={className} component="div">
            <ContactForm ref={contactFormRef} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Box className="w-full flex flex-col md:flex-row" component="div">
            <Button autoFocus className="mt-2 px-6 py-4 w-full cursor-pointer md:mx-2" text="Reset" onClick={() => {
              contactFormRef.current?.clearFormValues();
              contactFormRef.current?.clearSelectValues();
            }} />
            <Button autoFocus className="mt-3 px-6 py-4 w-full cursor-pointer md:mx-2 md:mt-2" text="Submit" onClick={() => {
              contactFormRef.current?.clearFormValues();
              contactFormRef.current?.clearSelectValues();
            }} />
          </Box>
        </DialogActions>
      </Dialog>
      <Button className="mx-4 mt-6 self-center p-4 cursor-pointer md:self-start" text={ctaText} onClick={handleOpenModal} />
    </Box>
  );
}
