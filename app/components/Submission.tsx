import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

interface Props {
  handleCloseSnackbar: any;
  horizontal: `left` | `center` | `right`;
  open: boolean;
  vertical: `top` | `bottom`;
}

export default function Submission({ handleCloseSnackbar, horizontal, open, vertical }: Props) {
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
  );
}
