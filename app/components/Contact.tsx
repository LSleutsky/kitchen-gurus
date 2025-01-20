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

export default function Contact() {
  const [shrink, setShrink] = useState<boolean>(false);
  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    firstName: '',
    spouseName: '',
    lastName: '',
    email: '',
    comments: ''
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

  return (
    <Container>
      <FormControl fullWidth className="[&>*]:my-2" component="form">
        <TextField 
          fullWidth
          required
          id="first-name"
          label="First Name"
          name="firstName"
          onChange={setFormValues}
          slotProps={{ inputLabel: { shrink: !!contactDetails.firstName } }}
          value={contactDetails.firstName}
          variant="outlined"
        />
        <TextField 
          fullWidth
          id="spouse-name"
          label="Spouse Name"
          name="spouseName"
          onChange={setFormValues}
          slotProps={{ inputLabel: { shrink: !!contactDetails.spouseName } }}
          value={contactDetails.spouseName}
          variant="outlined"
        />
        <TextField 
          fullWidth
          required
          id="last-name"
          label="Last Name"
          name="lastName"
          onChange={setFormValues}
          slotProps={{ inputLabel: { shrink: !!contactDetails.lastName } }}
          value={contactDetails.lastName}
          variant="outlined"
        />
        <TextField 
          fullWidth
          id="email"
          label="Email"
          name="email"
          onChange={setFormValues}
          slotProps={{ inputLabel: { shrink: !!contactDetails.email } }}
          value={contactDetails.email}
          variant="outlined"
        />
        <TextField 
          fullWidth
          multiline
          id="comments"
          label="Comments"
          minRows="3"
          name="comments"
          onChange={setFormValues}
          slotProps={{ inputLabel: { shrink: !!contactDetails.comments } }}
          value={contactDetails.comments}
          variant="outlined"
        />
        <Button className="p-4 px-10" text="Reset" onClick={clearFormValues}/>
      </FormControl>
    </Container>
  );
}