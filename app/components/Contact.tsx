import { useState } from "react";
import { capitalize, startCase, upperFirst } from "es-toolkit/string";
import Button from "./Button";
import Checkbox from '@mui/material/Checkbox';
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import type { SelectChangeEvent } from "@mui/material/Select";

interface ContactDetails {
  [key: string]: any;
}

interface InputEventTarget {
  [key: string]: any;
}

export default function Contact() {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const serviceOptions = ['Cabinets', 'Lighting', 'Flooring', 'Fixtures', 'Appliances', 'Custom'];

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const baseMaterialInputStyles = {
    '& .MuiInputBase-root': {
      'border-radius': '0',
      'font-family': 'Open Sans'
    },
  };

  const [serviceName, setServiceName] = useState<string[]>([]);

  const [shrinkOnInputEventTarget, setShrinkOnInputEventTarget] = useState<InputEventTarget>({
    targetFirstName: false,
    targetSpouseName: false,
    targetLastName: false,
    targetEmail: false,
    targetComments: false,
  });

  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    firstName: "",
    spouseName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  const clearFormValues = () =>
    setContactDetails({
      firstName: "",
      spouseName: "",
      lastName: "",
      email: "",
      comments: "",
    });

  const clearSelectValues = () => setServiceName([]);
  const formattedInputTargetLiteral = (name: string) => `target${upperFirst(`'${name}'`)}`;

  const handleServiceSelection = (event: SelectChangeEvent<typeof serviceName>) =>
    setServiceName(typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value);

  const setFormValues = (event: React.ChangeEvent<HTMLInputElement>) =>
    setContactDetails({
      ...contactDetails,
      [event.target.name]: event.target.value,
    });

  const textfieldLabelBlur = (event: React.FocusEvent<HTMLInputElement>) =>
    setShrinkOnInputEventTarget(
      Object.keys(shrinkOnInputEventTarget).map((target: string) => ({ [target]: !event.target.name }))
    );

  const textfieldLabelFocus = (event: React.FocusEvent<HTMLInputElement>) =>
    setShrinkOnInputEventTarget(
      Object.keys(shrinkOnInputEventTarget).map((inputTarget: string) => event.target.name === inputTarget)
    );

  return (
    <Container component="form">
      <FormGroup className="[&>*]:my-2">
        {/* Filter out comments from map, which will be its own text field after select dropdown */}
        {Object.keys(contactDetails).slice(0, -1).map(key => (
          <TextField
            key={key}
            required={key === "firstName" || key === "lastName"}
            label={startCase(key)}
            name={key}
            onBlur={textfieldLabelBlur}
            onChange={setFormValues}
            onFocus={textfieldLabelFocus}
            slotProps={{
              inputLabel: {
                shrink: !!contactDetails[key] || shrinkOnInputEventTarget[formattedInputTargetLiteral(key)]
              }
            }}
            sx={baseMaterialInputStyles}
            value={key !== 'email' ? capitalize(contactDetails[key]) : contactDetails[key]}
            variant="outlined"
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
            onChange={handleServiceSelection}
            renderValue={selected => selected.join(', ')}
            sx={{
              '&.MuiSelect-root': {
                'border-radius': '0',
                'font-family': 'Open Sans'
              }
            }}
            value={serviceName}
          >
            {serviceOptions.map((type: string) => (
              <MenuItem key={type} value={type}>
                <Checkbox checked={serviceName.includes(type)} />
                <ListItemText primary={type} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Comments"
          minRows="3"
          multiline
          name="comments"
          onBlur={textfieldLabelBlur}
          onChange={setFormValues}
          onFocus={textfieldLabelFocus}
          slotProps={{
            inputLabel: {
              shrink: !!contactDetails.comments || shrinkOnInputEventTarget.targetComments
            }
          }}
          sx={baseMaterialInputStyles}
          value={capitalize(contactDetails.comments)}
        />
      </FormGroup>
      <Button className="p-4 px-10" text="Reset" onClick={() => {
        clearFormValues();
        clearSelectValues();
      }} />
    </Container>
  );
}
