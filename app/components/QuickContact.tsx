import { useState } from "react";
import { Controller, useForm } from "react-hook-form"

import { capitalize } from "es-toolkit/string";

import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

import { phoneNumberAutoFormat } from "~/utils";
import type { FormInputTarget } from '~/utils/constants';
import { formValidationRules } from "~/utils/constants";

import Button from "./Button";

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

export default function QuickContact() {
  const [contactDetails, setContactDetails] = useState<FormInputTarget>({
      firstName: ``,
      lastName: ``,
      phoneNumber: ``,
      email: ``,
      comments: ``
    });

  const {
      control,
      formState: { errors, isSubmitSuccessful, isSubmitted, isValid },
      reset
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

    reset();
  };

  const setFormValues = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.name === `phoneNumber`)
      return setContactDetails((prev: FormInputTarget) => ({
        ...contactDetails,
        phoneNumber: phoneNumberAutoFormat(event.target.value, prev.phoneNumber)
      }));

    setContactDetails({
      ...contactDetails,
      [event.target.name]: event.target.name === `email`
        ? event.target.value
        : event.target.value.replace(/[^[a-zA-Z0-9_.-\s]*$/, ``).split(` `).map(capitalize).join(` `)
    });
  }

  return (
    <Container className="flex flex-col font-['Open_Sans']" component="form">
      <h3 className="text-white text-xl text-center pb-2">Get a Free Kitchen Estimate</h3>
      <div className="flex items-center justify-center mb-3">
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <TextField
              {...field}
              required
              error={!!errors[`firstName`]}
              // helperText={errors[`firstName`]?.message}
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
              required
              error={!!errors[`lastName`]}
              // helperText={errors[`lastName`]?.message}
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
              required
              error={!!errors[`phoneNumber`]}
              // helperText={errors[`phoneNumber`]?.message}
              label="Phone Number"
              name="phoneNumber"
              size="small"
              slotProps={{
                htmlInput: {
                  // weird bug where one extra number gets appended to end value sent to form data if extra numbers pressed on input
                  maxLength: 14
                }
              }}
              sx={baseQuickContactFormInputStyles}
              type="tel"
              value={contactDetails.phoneNumber}
              variant="filled"
              onChange={event => {
                field.onChange(event);
                setFormValues(event);
              }}
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
              error={!!errors[`email`]}
              helperText={errors[`email`]?.message}
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
              value={contactDetails.comments}
              variant="filled"
              onChange={event => {
                field.onChange(event);
                setFormValues(event);
              }}
            />
          )}
        />
      </div>
      <footer className="w-full flex flex-col mb-2 md:flex-row">
        <Button
          className="mt-4 p-2 px-10 cursor-pointer hover:bg-white md:w-1/2 md:mr-3"
          text="Reset"
          onClick={clearFormValues}
        />
        <span className="md:w-1/2">
          <Button
            className={`
              w-full mt-2 ml-0 p-2 px-10
              md:mt-4 md:mr-0
              cursor-${isValid || (isSubmitted && !isSubmitSuccessful) ? `pointer` : `not-allowed`}
              ${isValid ? `hover:bg-white` : ``}
            `}
            disabled={!isValid && !isSubmitted}
            text="Submit"
            type="submit"
          />
        </span>
      </footer>
    </Container>
  );
}
