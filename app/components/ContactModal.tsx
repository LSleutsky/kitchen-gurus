import { useRef, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

import Alert from '@mui/material/Alert';
import Box from "@mui/material/Box";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import type { SnackbarCloseReason, SnackbarOrigin } from '@mui/material/Snackbar';
import Snackbar from '@mui/material/Snackbar';

import Button from "./Button";
import ContactForm from "./ContactForm";
import Logo from "./Logo";

interface ContactFormRef {
  clearFormValues: () => void;
  clearSelectValues: () => void;
}

interface Props {
  className?: string;
  ctaText: string;
}

interface SnackbarState extends SnackbarOrigin {
  open: boolean;
}

export default function ContactModal({ className, ctaText }: Props) {
  const contactFormRef = useRef<ContactFormRef>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [snackbarState, setSnackbarState] = useState<SnackbarState>({
    open: false,
    vertical: `top`,
    horizontal: `center`
  });

  const { horizontal, open, vertical } = snackbarState;
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleOpenSnackbar = (newSnackbarState: SnackbarOrigin) =>
    setSnackbarState({ ...newSnackbarState, open: true });

  const handleCloseSnackbar = (_: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === `clickaway`) return;

    setSnackbarState({ ...snackbarState, open: false });
  }

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
              handleCloseModal();
              handleOpenSnackbar({ vertical: `top`, horizontal: `center` });
            }} />
          </Box>
        </DialogActions>
      </Dialog>
      <Button className="mx-4 mt-6 self-center p-4 cursor-pointer md:self-start" text={ctaText} onClick={handleOpenModal} />
      <Snackbar
        key={vertical + horizontal}
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={4000}
        open={open}
        sx={{
          textAlign: `center`,
          '& .MuiPaper-root': {
            background: `#F98500`,
            borderRadius: 0
          },
          '& .MuiSnackbarContent-message': {
            fontSize: `20px`
          },
          '& .MuiSvgIcon-root': {
            fontSize: `28px`
          }
        }}
        onClose={handleCloseSnackbar}
      >
        <Alert
          severity="success"
          sx={{
            width: `100%`,
            '& .MuiAlert-icon': {
              alignItems: `center`
            },
            '& .MuiAlert-message': {
              fontSize: `20px`
            }
          }} 
          variant="filled"
          onClose={handleCloseSnackbar}
        >
          <Box component="p">Thank you for your submission! We will do our best to contact you within 24 hours.</Box>
        </Alert>
      </Snackbar>
    </Box>
  );
}
