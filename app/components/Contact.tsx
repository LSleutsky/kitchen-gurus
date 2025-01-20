import { useState } from 'react';
import { startCase, upperFirst } from 'es-toolkit/string';
import Button from './Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import TextField from "@mui/material/TextField";

interface ContactDetails {
  [key: string]: any;
}

interface InputEventTarget {
  [key: string]: any;
}

export default function Contact() {
  const [shrinkOnInputEventTarget, setShrinkOnInputEventTarget] = useState<InputEventTarget>({
    targetFirstName: false,
    targetSpouseName: false,
    targetLastName: false,
    targetEmail: false,
    targetComments: false
  })

  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    firstName: '',
    spouseName: '',
    lastName: '',
    email: '',
    comments: ''
  });

  const textfieldLabelBlur = (event: React.FocusEvent<HTMLInputElement>) =>
    setShrinkOnInputEventTarget(
      Object.keys(shrinkOnInputEventTarget).map((target: string) => ({ [target]: !event.target.name }))
    );

  const textfieldLabelFocus = (event: React.FocusEvent<HTMLInputElement>) =>
    setShrinkOnInputEventTarget(
      Object.keys(shrinkOnInputEventTarget).map((target: string) => ({ target: event.target.name === target }))
    );

  const clearFormValues = () =>
    setContactDetails({
      firstName: '',
      spouseName: '',
      lastName: '',
      email: '',
      comments: ''
    })

  const setFormValues = (event: React.ChangeEvent<HTMLInputElement>) =>
    setContactDetails({
      ...contactDetails,
      [event.target.name]: event.target.value
    });

  const formattedInputTargetLiteral = (name: string) =>`target${upperFirst(`'${name}'`)}`

  return (
    <Container>
      <FormControl fullWidth className="[&>*]:my-2" component="form">
        {Object.keys(contactDetails).map(key => 
          <TextField
            key={key}
            fullWidth
            required={key === 'firstName' || key === 'lastName'}
            label={startCase(key)}
            multiline={key === 'comments'}
            minRows="3" // if multiline attribute is true (for comments textarea)
            name={key}
            onBlur={textfieldLabelBlur}
            onChange={setFormValues}
            onFocus={textfieldLabelFocus}
            slotProps={{
              inputLabel: {
                shrink: !!contactDetails[key] || shrinkOnInputEventTarget[formattedInputTargetLiteral(key)]
              }
            }}
            value={contactDetails[key]}
            variant="outlined"
          />
        )}
        <Button className="p-4 px-10" text="Reset" onClick={clearFormValues}/>
      </FormControl>
    </Container>
  );
}