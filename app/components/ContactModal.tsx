import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import CloseIcon from "@mui/icons-material/Close";

import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import type { SnackbarCloseReason, SnackbarOrigin } from '@mui/material/Snackbar';
import Snackbar from '@mui/material/Snackbar';

import Button from "./Button";
import ContactForm from "./ContactForm";
import Logo from "./Logo";

interface Props {
  className?: string;
  ctaText?: string;
}

interface SnackbarState extends SnackbarOrigin {
  open: boolean;
}

export default function ContactModal({ className, ctaText }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState<boolean>(false);

  const [snackbarState, setSnackbarState] = useState<SnackbarState>({
    open: false,
    vertical: `top`,
    horizontal: `center`
  });

  const { horizontal, open, vertical } = snackbarState;
  const handleContactFormSubmitState = (state: boolean) => setIsContactFormSubmitted(state);

  const handleOpenModal = () => {
    setOpenModal(true);
    setSnackbarState({ ...snackbarState, open: false });
    navigate(location.pathname, { state: { openModal: true } });
  };

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    navigate(location.pathname, { state: { openModal: false } });
  }, [location.pathname, navigate]);

  const handleOpenSnackbar = (newSnackbarState: SnackbarOrigin) =>
    setSnackbarState({ ...newSnackbarState, open: true });

  const handleCloseSnackbar = (_: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === `clickaway`) return;

    setSnackbarState({ ...snackbarState, open: false });
  }

  useEffect(() => {
    if (location?.state?.openModal) setOpenModal(true);
  }, [location]);

  useEffect(() => {
    const handleBrowserBackButtonClick = () => {
      if (openModal) {
        handleCloseModal();
      }
    };

    window.addEventListener(`popstate`, handleBrowserBackButtonClick);

    return () => window.removeEventListener(`popstate`, handleBrowserBackButtonClick);
  }, [handleCloseModal, openModal]);

  useEffect(() => {
    if (isContactFormSubmitted) {
      handleCloseModal();
      handleOpenSnackbar({ vertical: `top`, horizontal: `center` });
    }
  }, [handleCloseModal, isContactFormSubmitted]);

  return (
    <main className={className}>
      <Dialog
        fullScreen
        aria-labelledby="responsive-dialog-title"
        open={openModal}
        onClose={handleCloseModal}
      >
        <header id="responsive-dialog-title">
          <div className="flex flex-col-reverse items-center justify-between bg-[#51A655] px-6 py-3 md:flex-row md:pl-0 md:py-0">
            <div className="flex flex-col items-center md:flex-row">
              <Logo action={handleCloseModal} alt="Kitchen Gurus logo" className="w-60" src="/kitchen-gurus-logo.png" />
              <h2 className="font-['Open_Sans'] text-xl text-white text-center sm:text-2xl md:text-3xl md:pl-2">{ctaText}</h2>
            </div>
            <span className="self-end md:self-center">
              <CloseIcon
                className="cursor-pointer text-white"
                fontSize="large"
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: `28px`
                  }
                }}
                onClick={handleCloseModal}
              />
            </span>
          </div>
        </header>
        <DialogContent>
          <ContactForm handleContactFormSubmission={handleContactFormSubmitState as any} />
        </DialogContent>
      </Dialog>
      <Button className="mx-4 mt-6 self-center p-4 cursor-pointer md:self-start" text={ctaText} onClick={handleOpenModal} />
      <Snackbar
        key={vertical + horizontal}
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={5000}
        open={open}
        sx={{
          textAlign: `center`,
          '&.MuiSnackbar-root': {
            boxShadow: `1px 1px 10px #222`
          },
          '& .MuiSnackbarContent-message': {
            fontSize: `20px`
          },
          '& .MuiPaper-root': {
            background: `#51A655`,
            borderRadius: 0
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
          <p>Thank you for your submission! We will do our best to contact you within 24 hours.</p>
        </Alert>
      </Snackbar>
    </main>
  );
}
