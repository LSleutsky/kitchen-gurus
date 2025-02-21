import { useEffect, useState } from "react";
import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from "react-hook-form"

import { capitalize } from "es-toolkit/string";

import CircularProgress from '@mui/material/CircularProgress';
import Container from "@mui/material/Container";
import InputAdornment from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';
import type { SnackbarCloseReason, SnackbarOrigin } from '@mui/material/Snackbar';
import TextField from "@mui/material/TextField";
import Tooltip from '@mui/material/Tooltip';

import useWindowSize from "~/hooks/useWindowSize";

import { phoneNumberAutoFormat } from "~/utils";
import type { FormInputTarget, SnackbarState } from '~/utils/constants';
import { formValidationRules } from "~/utils/constants";

import Button from "./Button";
import Submission from "./Submission";

interface QuickContactFormInputs {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email?: string;
  comments?: string;
}

const baseQuickContactFormInputStyles = {
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
      background: `white`
    }
  },
  '& .MuiInputLabel-root': {
    fontFamily: `Open Sans`
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-error': {
      '& .MuiOutlinedInput-notchedOutline': {
        border: `2px solid #D32F2F`
      }
    }
  },
  '&.MuiTextField-root': {
    background: `white`,
    '&:first-of-type': {
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

export default function QuickContact() {
  const [hasAdornmentFocus, setHasAdornmentFocus] = useState<boolean>(false);
  const [isQuickContactFormSuccessfullySubmitted, setIsQuickContactFormSuccessfullySubmitted] = useState<boolean>(false);

  const [contactDetails, setContactDetails] = useState<FormInputTarget>({
      firstName: ``,
      lastName: ``,
      phoneNumber: ``,
      email: ``,
      comments: ``
    });

  const [snackbarState, setSnackbarState] = useState<SnackbarState>({
    open: false,
    vertical: `top`,
    horizontal: `center`
  });

  const { width } = useWindowSize();
  const { horizontal, open, vertical } = snackbarState;
  const setInputAdornmentFocus = () => setHasAdornmentFocus(true);

  const {
      clearErrors,
      control,
      formState: { errors, isSubmitSuccessful, isSubmitted, isSubmitting, isValid },
      handleSubmit,
      reset,
      setError
  } = useForm<QuickContactFormInputs>({
      defaultValues: {
        firstName: ``,
        lastName: ``,
        phoneNumber: ``,
        email: ``,
        comments: ``
      },
      mode: `onTouched`,
      reValidateMode: `onSubmit`
    });

  const clearFormValues = () => {
    setContactDetails({
      firstName: ``,
      lastName: ``,
      phoneNumber: ``,
      email: ``,
      comments: ``
    });

    setHasAdornmentFocus(false);
    reset();
  };

  const setFormValues = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.name === `phoneNumber`)
      return setContactDetails({
        ...contactDetails,
        phoneNumber: phoneNumberAutoFormat(event.target.value)
      });

    setContactDetails({
      ...contactDetails,
      [event.target.name]: event.target.name === `email`
        ? event.target.value
        : event.target.value.replace(/[^[a-zA-Z0-9_.-\s]*$/, ``).split(` `).map(capitalize).join(` `)
    });
  }

  const handleOpenSnackbar = (newSnackbarState: SnackbarOrigin) =>
      setSnackbarState({ ...newSnackbarState, open: true });

  const handleCloseSnackbar = (_: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === `clickaway`) return;

    setSnackbarState({ ...snackbarState, open: false });
  };

  const onSubmit: SubmitHandler<QuickContactFormInputs> = async data => {
      try {
        const response = await fetch(`/api/submit-contact-form`, {
          method: `POST`,
          headers: {
            'Content-Type': `application/json`
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          setError(`root`, { type: `manual`, message: `Submission failed` });

          return;
        }

        if (response.ok) setIsQuickContactFormSuccessfullySubmitted(true);

        clearFormValues();
      } catch (error) {
        console.error(`Error sending email: `, error);
      }
    };

    const onError: SubmitErrorHandler<QuickContactFormInputs> = error =>
      console.error(`Submission Error: `, error);

    useEffect(() => {
      if (isSubmitSuccessful) handleOpenSnackbar({ vertical: `top`, horizontal: `center` });

      if (isSubmitted && !isSubmitSuccessful) handleOpenSnackbar({ vertical: `top`, horizontal: `center` });
    }, [isSubmitted, isSubmitSuccessful]);

    useEffect(() => {
      if (isQuickContactFormSuccessfullySubmitted) reset();
    }, [isQuickContactFormSuccessfullySubmitted, reset]);

  return (
    <Container className="relative flex flex-col font-['Open_Sans']" component="form" onSubmit={e => {
      if (!isSubmitSuccessful) {
        clearErrors();
        reset(undefined, { keepDirtyValues: true });
      }

      handleSubmit(onSubmit, onError)(e);
    }}>
      {isSubmitting && (
        <div className={`absolute left-0 w-full h-full flex justify-center items-center ${isSubmitting ? `z-10` : ``}`}>
          <CircularProgress size="8em" sx={{
            '&.MuiCircularProgress-root': {
              color: `#F98500`
            }
          }} />
        </div>
      )}
      <h3 className="text-white text-xl text-center font-light pb-2">Get a Free Kitchen Estimate</h3>
      <div className={isSubmitting ? `opacity-25` : ``}>
        <div className="flex items-center justify-center mb-3">
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                required
                error={!!errors[`firstName`]}
                label="First Name"
                name="firstName"
                size="small"
                sx={baseQuickContactFormInputStyles}
                value={contactDetails.firstName}
                variant="filled"
                onChange={event => {
                  field.onChange(event);
                  setFormValues(event);
                }}
              />
            )}
            rules={formValidationRules(`firstName`)}
          />
          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                required
                error={!!errors[`lastName`]}
                label="Last Name"
                name="lastName"
                size="small"
                sx={baseQuickContactFormInputStyles}
                value={contactDetails.lastName}
                variant="filled"
                onChange={event => {
                  field.onChange(event);
                  setFormValues(event);
                }}
              />
            )}
            rules={formValidationRules(`lastName`)}
          />
        </div>
        <div className="flex items-center justify-center mb-3">
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                required
                error={!!errors[`phoneNumber`]}
                label={width < 768 || width > 900 ? `Phone Number` : `Phone`}
                name="phoneNumber"
                size="small"
                slotProps={{
                  htmlInput: {
                    maxLength: 14
                  },
                  input: {
                    startAdornment: hasAdornmentFocus ? (
                      <InputAdornment
                        position="start"
                        sx={{
                          opacity: 0,
                          pointerEvents: `none`,
                          [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                            opacity: 1
                          },
                          '&.MuiInputAdornment-root': {
                            mt: `20.5px !important`
                          }
                        }}
                      >
                        +1
                      </InputAdornment>
                    ) : null
                  }
                }}
                sx={{
                  ...baseQuickContactFormInputStyles,
                  '& .MuiInputBase-input': {
                    pl: `6px`
                  }
                }}
                type="tel"
                value={contactDetails.phoneNumber}
                variant="filled"
                onChange={event => {
                  field.onChange(event);
                  setFormValues(event);
                }}
                onFocus={setInputAdornmentFocus}
              />
            )}
            rules={formValidationRules(`phoneNumber`)}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                error={!!errors[`email`]}
                label="Email"
                name="email"
                size="small"
                sx={baseQuickContactFormInputStyles}
                type="email"
                value={contactDetails.email}
                variant="filled"
                onChange={event => {
                  field.onChange(event);
                  setFormValues(event);
                }}
              />
            )}
            rules={formValidationRules(`email`)}
          />
        </div>
        <div className="flex items-center justify-center">
          <Controller
            control={control}
            name="comments"
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                multiline
                label="How Can We Help You?"
                minRows="2"
                name="comments"
                size="small"
                sx={baseQuickContactFormInputStyles}
                value={capitalize(contactDetails.comments)}
                variant="filled"
                onChange={event => {
                  field.onChange(event);
                  setFormValues(event);
                }}
              />
            )}
          />
        </div>
      </div>
      <footer className="w-full flex flex-col mb-2 md:flex-row">
        <Button
          className="mt-4 p-2 px-10 cursor-pointer hover:bg-white md:w-1/2 md:mr-3"
          text="Reset"
          onClick={clearFormValues}
        />
        <Tooltip
          disableInteractive
          followCursor
          slotProps={{
            tooltip: {
              sx: { fontSize: `14px` }
            }
          }}
          title={!isValid && !isSubmitted && `Please fill out the required form fields`}
        >
          <span className="md:w-1/2">
            <Button
              className={`
              w-full mt-2 ml-0 p-2 px-10
              md:mt-4 md:mr-0
              cursor-${isValid || (isSubmitted && !isSubmitSuccessful) ? `pointer` : `not-allowed`}
              ${isValid || (isSubmitted && !isSubmitSuccessful) ? `hover:bg-white` : ``}
            `}
              disabled={!isValid && !isSubmitted}
              text="Submit"
              type="submit"
            />
          </span>
        </Tooltip>
      </footer>
      <Submission
        handleCloseSnackbar={handleCloseSnackbar}
        horizontal={horizontal}
        isSuccessfullySubmitted={isQuickContactFormSuccessfullySubmitted}
        open={open}
        vertical={vertical}
      />
    </Container>
  );
}
