import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "./Button";

export default function QuickContact() {
  const baseContactFormInputStyles = {
    '&.MuiContainer-root': {
      padding: 0
    },
    '& .MuiInputBase-root': {
      borderRadius: `0`,
      background: `white`,
      fontFamily: `Open Sans`,
      '&::before': {
        borderBottom: `1px solid rgb(81,166,85)`
      },
      '&::after': {
        borderBottom: `1px solid rgb(81,166,85)`
      },
      '&:hover': {
        background: `white`,
        '&::before': {
          borderBottom: `1px solid rgb(81,166,85)`
        }
      }
    },
    '& .MuiInputLabel-root': {
      fontFamily: `Open Sans`
    },
    '&.MuiTextField-root': {
      background: `white`,
      '&:first-child': {
        mr: 2
      },
      '&:last-child': {
        mr: 0
      }
    },
    '& label': {
      color: `rgb(81,166,85)`,
      '&.Mui-focused': {
        color: `rgb(81,166,85)`,
        fontWeight: 700
      },
      '&.Mui-error': {
        color: `#D32F2F`
      }
    }
  };

  return (
    <section className="flex flex-col font-['Open_Sans']">
      <Box className="flex items-center justify-center w-full h-full mb-3">
        <TextField
          label="First Name"
          name="firstName"
          size="small"
          sx={baseContactFormInputStyles}
          variant="filled"
        />
        <TextField
          label="Last Name"
          name="lastName"
          size="small"
          sx={baseContactFormInputStyles}
          variant="filled"
        />
      </Box>
      <div className="flex items-center justify-center w-full h-full mb-3">
        <TextField
          label="Phone Number"
          size="small"
          sx={baseContactFormInputStyles}
          variant="filled"
        />
        <TextField
          label="Email"
          name="email"
          size="small"
          sx={baseContactFormInputStyles}
          variant="filled"
        />
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <TextField
          fullWidth
          multiline
          label="How Can We Help You?"
          minRows="2"
          name="comments"
          size="small"
          sx={baseContactFormInputStyles}
          variant="filled"
        />
      </div>
      <footer className="w-full flex flex-col mb-2 md:flex-row">
        <Button
          className="mt-4 p-2 px-10 cursor-pointer hover:bg-white md:w-1/2 md:mr-3"
          text="Reset"
        />
        <span className="md:w-1/2">
          <Button
            className={`
              w-full mt-2 ml-0 p-2 px-10
              md:mt-4 md:mr-0
              hover:bg-white
            `}
            // disabled={!isValid && !isSubmitted}
            text="Submit"
            type="submit"
          />
        </span>
      </footer>
    </section>
  );
}
