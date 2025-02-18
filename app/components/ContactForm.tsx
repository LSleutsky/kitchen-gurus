import { useEffect,useState } from 'react';
import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from "react-hook-form"

import { capitalize, startCase } from "es-toolkit/string";

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import InputAdornment from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import type { SelectChangeEvent } from "@mui/material/Select";
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import Tooltip from '@mui/material/Tooltip';

import { phoneNumberAutoFormat } from "~/utils";
import type { FormInputTarget, ServiceOptions } from '~/utils/constants';
import { formValidationRules, serviceOptions } from '~/utils/constants';

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
  handleContactFormSubmission: (submitted: boolean) => typeof submitted;
  handleContactFormSuccessSubmission: (submittedSuccess: boolean) => typeof submittedSuccess;
  headerText?: string | React.JSX.Element;
}

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 250,
      width: 250
    }
  }
};

const baseContactFormInputStyles = {
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
    },
    '&.Mui-error': {
      '& .MuiOutlinedInput-notchedOutline': {
        border: `2px solid #D32F2F`
      },
    }
  },
  '& label': {
    color: `rgb(81,166,85)`,
    '&.Mui-focused': {
      color: `rgb(81,166,85)`,
      fontWeight: 600
    },
    '&.Mui-error': {
      color: `#D32F2F`
    }
  }
};

export default function ContactForm({ handleContactFormSubmission, handleContactFormSuccessSubmission, headerText }: Props) {
  const [serviceName, setServiceName] = useState<string[]>([]);
  const [hasAdornmentFocus, setHasAdornmentFocus] = useState<boolean>(false);

  const [contactDetails, setContactDetails] = useState<FormInputTarget>({
    firstName: ``,
    spouseName: ``,
    lastName: ``,
    phoneNumber: ``,
    email: ``,
    comments: ``
  });

  const {
    clearErrors,
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitted, isSubmitting, isValid },
    reset,
    setError
  } = useForm<ContactFormInputs>({
    defaultValues: {
      firstName: ``,
      spouseName: ``,
      lastName: ``,
      phoneNumber: ``,
      email: ``,
      comments: ``
    },
    mode: `onTouched`,
    reValidateMode: `onSubmit`
  });

  const clearServiceSelection = () => setServiceName([]);
  const setInputAdornmentFocus = () => setHasAdornmentFocus(true);

  const clearFormValues = () => {
    setContactDetails({
      firstName: ``,
      spouseName: ``,
      lastName: ``,
      phoneNumber: ``,
      email: ``,
      comments: ``
    });

    setHasAdornmentFocus(false);
    reset();
  };

  const handleServiceSelection = (event: SelectChangeEvent<typeof serviceName>) =>
    setServiceName(typeof event.target.value === `string` ? event.target.value.split(`,`) : event.target.value);

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

  const onSubmit: SubmitHandler<ContactFormInputs> = async data => {
    try {
      const response = await fetch(`/api/submit-contact-form`, {
        method: `POST`,
        headers: {
          'Content-Type': `application/json`
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        handleContactFormSuccessSubmission(false);
        setError(`root`, { type: `manual`, message: `Submission failed` });

        return;
      }

      clearFormValues();
    } catch (error) {
      console.error(`Error sending email: `, error);
    }
  };

  const onError: SubmitErrorHandler<ContactFormInputs> = error =>
    console.error(`Submission Error: `, error);

  useEffect(() => {
    handleContactFormSubmission(isSubmitted);
    handleContactFormSuccessSubmission(isSubmitSuccessful);
  }, [handleContactFormSubmission, handleContactFormSuccessSubmission, isSubmitSuccessful, isSubmitted]);

  return (
    <Container className="pt-6 pb-6 relative" component="form" sx={baseContactFormInputStyles} onSubmit={e => {
      clearErrors();
      reset(undefined, { keepDirtyValues: true });
      handleSubmit(onSubmit, onError)(e);
    }}>
      {isSubmitting && (
        <div className={`absolute w-full h-full flex justify-center items-center ${isSubmitting ? `z-10` : ``}`}>
          <CircularProgress size="8em" sx={{
            '&.MuiCircularProgress-root': {
              color: `#F98500`
            }
          }} />
        </div>
      )}
      {headerText}
      <section className={isSubmitting ? `opacity-25` : ``}>
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
                  error={!!errors[key as keyof ContactFormInputs]}
                  helperText={errors[key as keyof ContactFormInputs]?.message}
                  id={key}
                  label={startCase(key)}
                  name={key}
                  required={key === `firstName` || key === `lastName` || key === `phoneNumber`}
                  slotProps={{
                    htmlInput: {
                      maxLength: key === `phoneNumber` ? 14 : ``
                    },
                    input: {
                      startAdornment: key === `phoneNumber` && hasAdornmentFocus ? (
                        <InputAdornment
                          position="start"
                          sx={{
                            opacity: 0,
                            pointerEvents: `none`,
                            [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                              opacity: 1
                            },
                            '&.MuiInputAdornment-root': {
                              mt: `3.5px`
                            }
                          }}
                        >
                          +1
                        </InputAdornment>
                      ) : null
                    },
                    inputLabel: { shrink: fieldState.isFocused }
                  }}
                  sx={{
                    mb: 2.5,
                    '& .MuiInputBase-input': {
                      pl: key === `phoneNumber` ? `10px` : ``
                    }
                  }}
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
                  onFocus={key === `phoneNumber` && setInputAdornmentFocus}
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
                  multiple
                  id="services-select-dropdown"
                  input={<OutlinedInput label="Services" />}
                  labelId="services-select"
                  MenuProps={MenuProps}
                  name="serviceOptions"
                  renderValue={selected => (
                    <Box sx={{ display: `flex`, flexWrap: `wrap`, gap: 0.5 }}>
                      {selected.map(value => (
                        <Chip
                          key={value}
                          label={value}
                          sx={{
                            '&.MuiChip-root': {
                              backgroundColor: `#51A655`,
                              color: `white`
                            }
                          }}
                        />
                      ))}
                    </Box>
                  )}
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
        <footer className="w-full flex flex-col mb-2 md:flex-row">
          <Button
            className="mt-4 p-4 px-10 cursor-pointer md:w-1/2 md:mr-3"
            text="Reset"
            onClick={() => {
              clearFormValues();
              clearServiceSelection();
            }}
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
                  w-full mt-2 ml-0 p-4 px-10
                  cursor-${isValid || (isSubmitted && !isSubmitSuccessful) ? `pointer` : `not-allowed`}
                  md:mt-4 md:mr-0
                `}
                disabled={!isValid && !isSubmitted}
                text="Submit"
                type="submit"
              />
            </span>
          </Tooltip>
        </footer>
      </section>
    </Container>
  )
}
