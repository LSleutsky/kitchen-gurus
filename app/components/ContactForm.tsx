import { useState } from 'react';

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

export default function ContactForm() {
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

  const setFormValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === `phoneNumber`)
      return setContactDetails((prev: Target) => ({
        ...contactDetails,
        phoneNumber: phoneNumberAutoFormat(event.target.value, prev.phoneNumber),
      }));

    setContactDetails({
      ...contactDetails,
      [event.target.name]: event.target.value,
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

  return (
    <Container className="pt-2" component="form" sx={baseMaterialInputStyles}>
      <FormGroup className="[&>*]:my-2">
        {/* Filter out last key-value pair from map, which will be its own comments text field after select dropdown */}
        {Object.keys(contactDetails).slice(0, -1).map(key => (
          <TextField
            key={key}
            label={startCase(key)}
            name={key}
            required={key === `firstName` || key === `lastName` || key === `phoneNumber`}
            slotProps={{
              inputLabel: {
                shrink: !!contactDetails[key] || shrinkOnInputEventTarget[formattedInputTargetLiteral(key)]
              }
            }}
            type={
              key === `email`
                ? `email`
                : key === `phoneNumber`
                  ? `tel`
                  : `text`
            }
            value={key !== `email` && key !== `phoneNumber` ? capitalize(contactDetails[key]) : contactDetails[key]}
            onBlur={textfieldLabelBlur}
            onChange={setFormValues}
            onFocus={textfieldLabelFocus}
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
          value={capitalize(contactDetails.comments)}
          onBlur={textfieldLabelBlur}
          onChange={setFormValues}
          onFocus={textfieldLabelFocus}
        />
      </FormGroup>
      <Button className="mt-4 p-4 px-10" text="Reset" onClick={() => {
        clearFormValues();
        clearSelectValues();
      }} />
    </Container>
  );
}