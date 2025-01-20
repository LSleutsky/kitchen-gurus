import { useState } from 'react';
import Button from './Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import TextField from "@mui/material/TextField";

interface ContactDetails {
  firstName: string;
  spouseName?: string;
  lastName: string;
  email?: string;
  comments?: string;
}

interface InputEventTarget {
  targetFirstName: boolean;
  targetSpouseName: boolean;
  targetLastName: boolean;
  targetEmail: boolean;
  targetComments: boolean;
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
    setShrinkOnInputEventTarget({
      targetFirstName: !event.target.name,
      targetSpouseName: !event.target.name,
      targetLastName: !event.target.name,
      targetEmail: !event.target.name,
      targetComments: !event.target.name
    });

  const textfieldLabelFocus = (event: React.FocusEvent<HTMLInputElement>) =>
    setShrinkOnInputEventTarget({
      targetFirstName: event.target.name === 'firstName',
      targetSpouseName: event.target.name === 'spouseName',
      targetLastName: event.target.name === 'lastName',
      targetEmail: event.target.name === 'email',
      targetComments: event.target.name === 'comments'
    });

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

  const { firstName, spouseName, lastName, email, comments } = contactDetails;
  const { targetFirstName, targetSpouseName, targetLastName, targetEmail, targetComments } = shrinkOnInputEventTarget;

  return (
    <Container>
      <FormControl fullWidth className="[&>*]:my-2" component="form">
        <TextField 
          fullWidth
          required
          id="first-name"
          label="First Name"
          name="firstName"
          onBlur={textfieldLabelBlur}
          onChange={setFormValues}
          onFocus={textfieldLabelFocus}
          slotProps={{ inputLabel: { shrink: !!firstName || targetFirstName } }}
          value={contactDetails.firstName}
          variant="outlined"
        />
        <TextField 
          fullWidth
          id="spouse-name"
          label="Spouse Name"
          name="spouseName"
          onBlur={textfieldLabelBlur}
          onChange={setFormValues}
          onFocus={textfieldLabelFocus}
          slotProps={{ inputLabel: { shrink: !!spouseName || targetSpouseName } }}
          value={contactDetails.spouseName}
          variant="outlined"
        />
        <TextField 
          fullWidth
          required
          id="last-name"
          label="Last Name"
          name="lastName"
          onBlur={textfieldLabelBlur}
          onChange={setFormValues}
          onFocus={textfieldLabelFocus}
          slotProps={{ inputLabel: { shrink: !!lastName || targetLastName } }}
          value={contactDetails.lastName}
          variant="outlined"
        />
        <TextField 
          fullWidth
          id="email"
          label="Email"
          name="email"
          onBlur={textfieldLabelBlur}
          onChange={setFormValues}
          onFocus={textfieldLabelFocus}
          slotProps={{ inputLabel: { shrink: !!email || targetEmail } }}
          value={contactDetails.email}
          variant="outlined"
        />
        <TextField 
          fullWidth
          multiline
          id="comments"
          label="Additional Comments"
          minRows="3"
          name="comments"
          onBlur={textfieldLabelBlur}
          onChange={setFormValues}
          onFocus={textfieldLabelFocus}
          slotProps={{ inputLabel: { shrink: !!comments || targetComments } }}
          value={contactDetails.comments}
          variant="outlined"
        />
        <Button className="p-4 px-10" text="Reset" onClick={clearFormValues}/>
      </FormControl>
    </Container>
  );
}