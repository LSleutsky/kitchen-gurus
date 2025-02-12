import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

interface Props {
  handleCloseSnackbar: any;
  horizontal: `left` | `center` | `right`;
  isSuccessfullySubmitted: boolean;
  open: boolean;
  vertical: `top` | `bottom`;
}

export default function Submission({ handleCloseSnackbar, horizontal, isSuccessfullySubmitted, open, vertical }: Props) {
  return (
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
          background: isSuccessfullySubmitted ? `#51A655` : `#C13E33`,
          borderRadius: 0
        },
        '& .MuiSvgIcon-root': {
          fontSize: `28px`
        }
      }}
      onClose={handleCloseSnackbar}
    >
      <Alert
        severity={isSuccessfullySubmitted ? `success` : `error`}
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
        <p>
          {isSuccessfullySubmitted
            ? `Thank you for your submission! We will do our best to contact you within 24 hours.`
            : `There seems to have been an error with your submission, please try again.`
          }
        </p>
      </Alert>
    </Snackbar>
  );
}
