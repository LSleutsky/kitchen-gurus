import { useEffect, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from "react-hook-form"

import { capitalize, startCase } from "es-toolkit/string";

import Checkbox from '@mui/material/Checkbox';
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import type { SelectChangeEvent } from "@mui/material/Select";
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";

import { phoneNumberAutoFormat } from "~/utils";

import Button from "./Button";

export interface ContactFormInputs {
  firstName: string;
  spouseName?: string;
  lastName: string;
  phoneNumber: string;
  email?: string;
  serviceOptions: ServiceOptions;
  comments?: string;
}

interface FormInputTarget {
  [key: string]: any;
}

interface Props {
  handleContactFormSubmission: (submitted: boolean) => typeof submitted;
}

interface ServiceOptions {
  value: string;
  label: string;
}

const serviceOptions: ServiceOptions[] = [
  { value: `cabinets`, label: `Cabinets` },
  { value: `lighting`, label: `Lighting` },
  { value: `flooring`, label: `Flooring` },
  { value: `fixtures`, label: `Fixtures` },
  { value: `appliances`, label: `Appliances` },
  { value: `custom`, label: `Custom` },
];

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 250,
      width: 250
    }
  }
};

const baseMaterialInputStyles = {
  '&.MuiContainer-root': {
    padding: 0
  },
  '& .MuiInputBase-root': {
    borderRadius: `0`,
    fontFamily: `Open Sans`
  },
  '&.MuiSelect-root': {
    borderRadius: `0`,
    fontFamily: `Open Sans`
  },
  '& .MuiInputLabel-root': {
    fontFamily: `Open Sans`
  }
};

export default function ContactForm({ handleContactFormSubmission }: Props) {
  const [serviceName, setServiceName] = useState<string[]>([]);

  const [contactDetails, setContactDetails] = useState<FormInputTarget>({
    firstName: ``,
    spouseName: ``,
    lastName: ``,
    phoneNumber: ``,
    email: ``,
    comments: ``,
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
    reset
  } = useForm<ContactFormInputs>({
    mode: `onTouched`
  })

  const onSubmit: SubmitHandler<ContactFormInputs> = data => console.info(data);
  const clearServiceSelection = () => setServiceName([]);

  const clearFormValues = () => {
    setContactDetails({
      firstName: ``,
      spouseName: ``,
      lastName: ``,
      phoneNumber: ``,
      email: ``,
      comments: ``
    });

    reset();
  };

  const handleServiceSelection = (event: SelectChangeEvent<typeof serviceName>) =>
    setServiceName(typeof event.target.value === `string` ? event.target.value.split(`,`) : event.target.value);

  const setFormValues = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.name === `phoneNumber`)
      return setContactDetails((prev: FormInputTarget) => ({
        ...contactDetails,
        phoneNumber: phoneNumberAutoFormat(event.target.value, prev.phoneNumber),
      }));

    setContactDetails({
      ...contactDetails,
      [event.target.name]: event.target.name === `email` ? event.target.value : capitalize(event.target.value),
    });
  }

  const formValidationRules = (key: string) => {
    switch (key) {
      case `email`:
        return {
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: `Please enter a valid email address`
          }
        };
      case `firstName`:
        return { required: `First Name is required` };
      case `lastName`:
        return { required: `Last Name is required` }
      case `phoneNumber`:
        return {
          required: `A valid Phone Number is required`,
          minLength: {
            // min length is 14 to account for the phone number format util that masks entered user input value
            value: 14,
            message: `A valid 10 digit phone number is required`
          }
        };
    }
  };

  useEffect(() => {
    handleContactFormSubmission(isSubmitted);
  }, [isSubmitted, handleContactFormSubmission]);

  return (
    <Container className="pt-6 pb-6" component="form" sx={baseMaterialInputStyles} onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        {/* Filter out last key-value pair from map, which will be its own comments text field after select dropdown */}
        {Object.keys(contactDetails).slice(0, -1).map(key => (
          <Controller
            key={key}
            control={control}
            name={key as any}
            render={({ field, fieldState }: any) => (
              <TextField
                {...field}
                key={key}
                error={!!errors[key as keyof ContactFormInputs]}
                helperText={errors[key as keyof ContactFormInputs]?.message}
                label={startCase(key)}
                name={key}
                required={key === `firstName` || key === `lastName` || key === `phoneNumber`}
                slotProps={{
                  htmlInput: {
                    // weird bug where one extra number gets appended to end value sent to form data if extra numbers pressed on input
                    maxLength: key === `phoneNumber` ? 14 : ``
                  },
                  inputLabel: { shrink: fieldState.isFocused }
                }}
                sx={{ mb: 2.5 }}
                type={
                  key === `email`
                    ? `email`
                    : key === `phoneNumber`
                      ? `tel`
                      : `text`
                }
                value={contactDetails[key]}
                onChange={event => {
                  field.onChange(event);
                  setFormValues(event);
                }}
              />
            )}
            rules={formValidationRules(key)}
          />
        ))}
        <Controller
          control={control}
          name="serviceOptions"
          render={({ field }) =>
            <FormControl>
              <InputLabel id="services-select">Services</InputLabel>
              <Select
                fullWidth
                multiple
                id="services-select-dropdown"
                input={<OutlinedInput label="Services" />}
                labelId="services-select"
                MenuProps={MenuProps}
                name="serviceOptions"
                renderValue={selected => selected.join(`, `)}
                value={serviceName}
                onChange={event => {
                  field.onChange(event);
                  handleServiceSelection(event);
                }}
              >
                {serviceOptions.map(option => (
                  <MenuItem key={option.value} value={option.label}>
                    <Checkbox checked={serviceName.includes(option.label)} />
                    <ListItemText primary={option.label} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          }
        />
        <Controller
          control={control}
          name="comments"
          render={({ field, fieldState }: any) =>
            <TextField
              multiline
              label="Comments"
              minRows="3"
              name="comments"
              slotProps={{
                inputLabel: { shrink: fieldState.isFocused }
              }}
              sx={{ mt: 2.5 }}
              value={capitalize(contactDetails.comments)}
              onChange={event => {
                field.onChange(event);
                setFormValues(event);
              }}
            />
          }
        />
      </FormGroup>
      <div className="w-full flex flex-col mb-2 md:flex-row">
        <Button
          className="w-full mt-4 mr-1 p-4 px-10 cursor-pointer"
          text="Reset"
          onClick={() => {
            clearFormValues();
            clearServiceSelection();
          }}
        />
        <Button
          className={`w-full mt-2 ml-0 p-4 px-10 cursor-${isValid ? `pointer` : `not-allowed`} md:mt-4 md:ml-1`}
          disabled={!isValid}
          text="Submit"
          type="submit"
        />
      </div>
    </Container>
  );
}
