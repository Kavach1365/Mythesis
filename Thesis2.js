import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Button, Typography, Grid, Box, Paper } from '@mui/material';

export const Thesis2 = () => {
  const mainOptions = ['Domain 1', 'Domain 2', 'Domain 3'];
  const subOptions = {
    'Domain 1': ['Guide A1', 'Guide B1', 'Guide C1'],
    'Domain 2': ['Guide A2', 'Guide B2', 'Guide C2'],
    'Domain 3': ['Guide A3', 'Guide B3', 'Guide C3']
  };

  const [mainSelections, setMainSelections] = useState(Array(mainOptions.length).fill(''));
  const [subSelections, setSubSelections] = useState(Array(mainOptions.length).fill([]));
  const [mainCompleted, setMainCompleted] = useState(Array(mainOptions.length).fill(false));
  const [storedPreferences, setStoredPreferences] = useState([]);

  const handleMainSelect = (index, value) => {
    const updatedMainSelections = [...mainSelections];
    updatedMainSelections[index] = value;
    setMainSelections(updatedMainSelections);

    const updatedSubSelections = [...subSelections];
    updatedSubSelections[index] = Array(subOptions[value].length).fill('');
    setSubSelections(updatedSubSelections);

    const updatedMainCompleted = [...mainCompleted];
    updatedMainCompleted[index] = true;
    setMainCompleted(updatedMainCompleted);
  };

  const handleSubSelect = (mainIndex, subIndex, value) => {
    const updatedSubSelections = [...subSelections];
    updatedSubSelections[mainIndex][subIndex] = value;
    setSubSelections(updatedSubSelections);
  };

  const handleStorePreferences = () => {
    const preferences = mainOptions.map((mainOption, mainIndex) => ({
      domain: mainSelections[mainIndex],
      guides: subSelections[mainIndex]
    }));

    setStoredPreferences(preferences);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="105vh"
    >
      <Paper elevation={8} style={{ width: '50%', padding: '20px', overflowY: 'auto', maxHeight: '80vh' }}>
        <Grid container spacing={2}>
          {mainOptions.map((mainOption, mainIndex) => (
            <Grid item xs={12} key={mainIndex}>
              <FormControl fullWidth variant="outlined" style={{ marginBottom: '10px' }}>
                <InputLabel style={{ fontSize: '14px' }}>{`Domain Preference ${mainIndex + 1}`}</InputLabel>
                <Select
                  value={mainSelections[mainIndex]}
                  onChange={(e) => handleMainSelect(mainIndex, e.target.value)}
                  label={`Domain Preference ${mainIndex + 1}`}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 150,
                      },
                    },
                  }}
                >
                  <MenuItem value="" style={{ height: '30px', fontSize: '12px' }}>
                    <em>Select domain</em>
                  </MenuItem>
                  {mainOptions.map((option) => (
                    <MenuItem
                      key={option}
                      value={option}
                      disabled={mainSelections.includes(option) && mainSelections.indexOf(option) !== mainIndex}
                      style={{ height: '30px', fontSize: '12px' }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {mainCompleted[mainIndex] && (
                <Grid item xs={12} style={{ width: '70%', marginLeft: '20%' }}>
                  {subOptions[mainSelections[mainIndex]].map((subOption, subIndex) => (
                    <FormControl fullWidth variant="outlined" key={subIndex} style={{ marginBottom: '10px' }}>
                      <InputLabel style={{ fontSize: '14px' }}>{`Guide Preference ${mainIndex + 1}.${subIndex + 1}`}</InputLabel>
                      <Select
                        value={subSelections[mainIndex][subIndex]}
                        onChange={(e) => handleSubSelect(mainIndex, subIndex, e.target.value)}
                        label={`Guide Preference ${mainIndex + 1}.${subIndex + 1}`}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 150,
                            },
                          },
                        }}
                      >
                        <MenuItem value="" style={{ height: '30px', fontSize: '12px' }}>
                          <em>Select guide</em>
                        </MenuItem>
                        {subOptions[mainSelections[mainIndex]].map((option) => (
                          <MenuItem
                            key={option}
                            value={option}
                            disabled={subSelections[mainIndex].includes(option)}
                            style={{ height: '30px', fontSize: '12px' }}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  ))}
                </Grid>
              )}
            </Grid>
          ))}

          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" onClick={handleStorePreferences}>
              Store Preferences
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" style={{ textAlign: 'center' }}>
              Stored Preferences
            </Typography>
            <ul>
              {storedPreferences.map((preference, index) => (
                <li key={index}>
                  <strong>{`Domain ${index + 1}: `}</strong> {preference.domain}
                  <ul>
                    {preference.guides.map((guide, subIndex) => (
                      <li key={subIndex}>{`Guide ${index + 1}.${subIndex + 1}: `}{guide}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
