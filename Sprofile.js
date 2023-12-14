import React, { useState } from 'react';
import {
  Container,
  TextField,
  Typography,
  Button,
  Grid,
  Paper,
  Avatar,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';

//import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const initialState = {
  firstName: '',
  lastName: '',
  fathersName: '',
  mothersName: '',
  mobileNo: '',
  email: '',
  address: '',
  gender: 'male',
  age: '',
  region: '',
  state: '',
  collegeName: '',
  collegeAddress: '',
  branch: '',
  mentor: {
    name: '',
    email: '',
    phone: '',
  },
  cgpa: '',
  achievements: [],
};

export const Sprofile = () => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      achievements: checked
        ? [...prevData.achievements, name]
        : prevData.achievements.filter((item) => item !== name),
    }));
  };

  const handleFileUpload = (e) => {
    // Handle file upload logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container component="main" maxWidth="md" >
      <Paper elevation={3} style={{ padding: 20, marginTop: 30 }}>
        <Typography variant="h4" gutterBottom>
          Student Profile
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* Add your components here */}
          {/* For example: */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Grid>

            {/* Continue adding other fields */}
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
          >
            Save
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

//export default App;
