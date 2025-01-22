import { useState } from "react";
import { capitalize, startCase, upperFirst } from "es-toolkit/string";
import Button from "./Button";
import CloseIcon from "@mui/icons-material/Close";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Checkbox from '@mui/material/Checkbox';
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import { phoneNumberAutoFormat } from "~/utils";
import type { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  className?: string;
  ctaText: string;
}

interface Target {
  [key: string]: any;
}

interface ServiceOptions {
  value: string;
  label: string;
}

const serviceOptions: ServiceOptions[] = [
  { value: 'cabinets', label: 'Cabinets' },
  { value: 'lighting', label: 'Lighting' },
  { value: 'flooring', label: 'Flooring' },
  { value: 'fixtures', label: 'Fixtures' },
  { value: 'appliances', label: 'Appliances' },
  { value: 'custom', label: 'Custom' },
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
    borderRadius: '0',
    fontFamily: 'Open Sans'
  },
  '&.MuiSelect-root': {
    borderRadius: '0',
    fontFamily: 'Open Sans'
  }
};

const baseMaterialModalStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #F98500',
  boxShadow: 24,
  py: 2
};

export default function Contact({ className, ctaText }: Props) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [serviceName, setServiceName] = useState<string[]>([]);

  const [contactDetails, setContactDetails] = useState<Target>({
    firstName: '',
    spouseName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    comments: '',
  });

  const [shrinkOnInputEventTarget, setShrinkOnInputEventTarget] = useState<Target>({
    targetFirstName: false,
    targetSpouseName: false,
    targetLastName: false,
    targetPhoneNumber: false,
    targetEmail: false,
    targetComments: false,
  });

  const clearFormValues = () =>
    setContactDetails({
      firstName: '',
      spouseName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      comments: '',
    });

  const clearSelectValues = () => setServiceName([]);
  const formattedInputTargetLiteral = (name: string) => `target${upperFirst(`'${name}'`)}`;
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleServiceSelection = (event: SelectChangeEvent<typeof serviceName>) =>
    setServiceName(typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value);

  const setFormValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'phoneNumber')
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
    <Box component="div" className={className}>
      <Modal
        aria-labelledby="Kitchen Gurus Contact Modal"
        aria-describedby="Contact Kitchen Gurus for a 100% Free Estimate"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={baseMaterialModalStyles}>
            <Box component="div" className="flex flex-col-reverse justify-between items-center px-6 pb-2 md:flex-row">
              <Box component="h2" className="text-2xl font-['Open_Sans'] sm:text-3xl">Get a Free Estimate</Box>
              <Box component="span" className="self-end">
                <CloseIcon className="cursor-pointer" fontSize="large" onClick={handleCloseModal} />
              </Box>
            </Box>
            <Container component="form" sx={baseMaterialInputStyles}>
              <FormGroup className="[&>*]:my-2">
                {/* Filter out last key-value pair from map, which will be its own comments text field after select dropdown */}
                {Object.keys(contactDetails).slice(0, -1).map(key => (
                  <TextField
                    key={key}
                    label={startCase(key)}
                    name={key}
                    onBlur={textfieldLabelBlur}
                    onChange={setFormValues}
                    onFocus={textfieldLabelFocus}
                    required={key === 'firstName' || key === 'lastName' || key === 'phoneNumber'}
                    slotProps={{
                      inputLabel: {
                        shrink: !!contactDetails[key] || shrinkOnInputEventTarget[formattedInputTargetLiteral(key)]
                      }
                    }}
                    type={
                      key === 'email'
                        ? 'email'
                        : key === 'phoneNumber'
                          ? 'tel'
                          : 'text'
                    }
                    value={key !== 'email' && key !== 'phoneNumber' ? capitalize(contactDetails[key]) : contactDetails[key]}
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
                    value={serviceName}
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
                  value={capitalize(contactDetails.comments)}
                />
              </FormGroup>
              <Button className="mt-4 p-4 px-10" text="Reset" onClick={() => {
                clearFormValues();
                clearSelectValues();
              }} />
            </Container>
          </Box>
        </Fade>
      </Modal>
      <Button className="mx-4 mt-6 self-center p-4 md:self-start" text={ctaText} onClick={handleOpenModal} />
    </Box>
  );
}
