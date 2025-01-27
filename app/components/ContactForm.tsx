import { forwardRef, useImperativeHandle, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from "react-hook-form"

import { capitalize, startCase, upperFirst } from "es-toolkit/string";

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

interface ContactFormInputs {
  firstName: string;
  spouseName?: string;
  lastName: string;
  phoneNumber: string;
  email?: string;
  serviceOptions: ServiceOptions;
  comments?: string;
}

interface Props {
  hasOwnCta?: boolean;
  hasOwnCtaAction?: () => void;
  hasOwnCtaText: string;
  hasOwnCtaType: string;
}

interface Target {
  [key: string]: any;
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
      width: 250,
    },
  },
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
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: `rgb(81,166,85)`,
    },
    '&:hover fieldset': {
      borderColor: `rgba(81,166,85, 0.7)`,
    },
    '&.Mui-focused fieldset': {
      borderColor: `rgb(81,166,85)`,
    }
  },
  '& label.Mui-focused': {
    color: `rgb(81,166,85)`,
    fontWeight: 600
  }
};

// eslint-disable-next-line react/display-name
const ContactForm = forwardRef(({ hasOwnCta, hasOwnCtaAction, hasOwnCtaText, hasOwnCtaType = `button` }: Props, ref) => {
  const [serviceName, setServiceName] = useState<string[]>([]);

  const [contactDetails, setContactDetails] = useState<Target>({
    firstName: ``,
    spouseName: ``,
    lastName: ``,
    phoneNumber: ``,
    email: ``,
    comments: ``,
  });

  const [shrinkOnInputEventTarget, setShrinkOnInputEventTarget] = useState<Target>({
    targetFirstName: false,
    targetSpouseName: false,
    targetLastName: false,
    targetPhoneNumber: false,
    targetEmail: false,
    targetComments: false,
  });

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactFormInputs>()

  const onSubmit: SubmitHandler<ContactFormInputs> = data => console.info(data)
  const clearSelectValues = () => setServiceName([]);
  const formattedInputTargetLiteral = (name: string) => `target${upperFirst(`'${name}'`)}`;

  const clearFormValues = () =>
    setContactDetails({
      firstName: ``,
      spouseName: ``,
      lastName: ``,
      phoneNumber: ``,
      email: ``,
      comments: ``,
    });

  const handleServiceSelection = (event: SelectChangeEvent<typeof serviceName>) =>
    setServiceName(typeof event.target.value === `string` ? event.target.value.split(`,`) : event.target.value);

  const setFormValues = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.name === `phoneNumber`)
      return setContactDetails((prev: Target) => ({
        ...contactDetails,
        phoneNumber: phoneNumberAutoFormat(event.target.value, prev.phoneNumber),
      }));

    setContactDetails({
      ...contactDetails,
      [event.target.name]: event.target.name === `email` ? event.target.value : capitalize(event.target.value),
    });
  }

  const textfieldLabelBlur = (event: React.FocusEvent<HTMLInputElement>) =>
    setShrinkOnInputEventTarget(
      Object.keys(shrinkOnInputEventTarget).map((target: string) => ({ [target]: !event.target.name }))
    );

  const textfieldLabelFocus = (event: React.FocusEvent<HTMLInputElement>) =>
    setShrinkOnInputEventTarget(
      Object.keys(shrinkOnInputEventTarget).map((inputTarget: string) => event.target.name === inputTarget)
    );

  const validationRules = (key: string) => {
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
          required: `A valid phone number is required`,
          minLength: {
            // min length is 14 to account for the phone number format util that masks entered user input for phone number
            value: 14,
            message: `A valid 10 digit phone number is required`
          }
        };
    }
  };

  useImperativeHandle(ref, () => {
    return {
      clearFormValues,
      clearSelectValues,
      onSubmit
    };
  });

  return (
    <Container className="pt-6 pb-6" component="form" sx={baseMaterialInputStyles} onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        {/* Filter out last key-value pair from map, which will be its own comments text field after select dropdown */}
        {Object.keys(contactDetails).slice(0, -1).map(key => (
          <Controller
            key={key}
            control={control}
            name={key as any}
            render={({ field }) => (
              <TextField
                {...field}
                key={key}
                error={!!errors[key as keyof ContactFormInputs]}
                helperText={errors[key as keyof ContactFormInputs]?.message}
                label={startCase(key)}
                name={key}
                slotProps={{
                  htmlInput: {
                    // weird bug where one extra number gets appended to end value sent to form data if extra numbers pressed on input
                    maxLength: key === `phoneNumber` ? 14 : ``
                  },
                  inputLabel: {
                    shrink: !!contactDetails[key] || shrinkOnInputEventTarget[formattedInputTargetLiteral(key)]
                  }
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
                onBlur={textfieldLabelBlur}
                onChange={(e) => {
                  field.onChange(e);
                  setFormValues(e);
                }}
                onFocus={textfieldLabelFocus}
              />
            )}
            rules={validationRules(key)}
          />
        ))}
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
            onChange={handleServiceSelection}
          >
            {serviceOptions.map(option => (
              <MenuItem key={option.value} value={option.label}>
                <Checkbox checked={serviceName.includes(option.label)} />
                <ListItemText primary={option.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          multiline
          label="Comments"
          minRows="3"
          name="comments"
          slotProps={{
            inputLabel: {
              shrink: !!contactDetails.comments || shrinkOnInputEventTarget.targetComments
            }
          }}
          sx={{ mt: 2.5 }}
          value={capitalize(contactDetails.comments)}
          onBlur={textfieldLabelBlur}
          onChange={setFormValues}
          onFocus={textfieldLabelFocus}
        />
      </FormGroup>
      {hasOwnCta && <Button className="mt-4 p-4 px-10 cursor-pointer" text={hasOwnCtaText} type={hasOwnCtaType} onClick={hasOwnCtaAction} />}
    </Container>
  );
});

export default ContactForm;
