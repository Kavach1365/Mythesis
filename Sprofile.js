import React, { useState } from 'react';
import {
  Container,
  TextField,
  Typography,
  Button,
  Grid,
  Paper,
  Avatar,
  Box,
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
  gender: '',
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
  const handleGenderChange = (e) => {
    setFormData((prevData) => ({ ...prevData, gender: e.target.value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prevData) => ({ ...prevData, profilePhoto: event.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container component="main" maxWidth="md" >
      <Paper elevation={3} style={{ padding: 20, marginTop: 30 }}>
        <Typography variant="h4" gutterBottom align='center'>
          Student Profile
        </Typography>
        <Box align="center" mb={2}>
          <label htmlFor="photo-upload">
            <Avatar
              alt="Profile Photo"
              src={formData.profilePhoto}
              sx={{ width: 150, height: 150, cursor: 'pointer' }}
            />
          </label>
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
        </Box>
        <form onSubmit={handleSubmit}>
          {/* Add your components here */}
          {/* For example: */}
          <Grid container spacing={2}>
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
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="FatherName"
                name="Father's Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="MotherName"
                name="MotherName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="MobileNumber"
                name="MobileNumber"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="MailId"
                name="MailId"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <Typography variant="subtitle1">Gender</Typography>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleGenderChange}
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Age"
                name="Age"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="Residential Address"
                name="Residential Address"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Collage Name"
                name="Collage Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="CollageAddr"
                name="CollageAddr"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Branch"
                name="Branch"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Mentor"
                name="Mentor"
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
