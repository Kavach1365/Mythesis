import React, { useState } from 'react';

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
    <div>
      {mainOptions.map((mainOption, mainIndex) => (
        <div key={mainIndex}>
          <label>{`Domain Preference ${mainIndex + 1}`}</label>
          <select
            value={mainSelections[mainIndex]}
            onChange={(e) => handleMainSelect(mainIndex, e.target.value)}
          >
            <option value="">select domain</option>
            {mainOptions.map((option) => (
              <option key={option} value={option} disabled={mainSelections.includes(option) && mainSelections.indexOf(option) !== mainIndex}>
                {option}
              </option>
            ))}
          </select>

          {mainCompleted[mainIndex] && (
            <div>
              {subOptions[mainSelections[mainIndex]].map((subOption, subIndex) => (
                <div key={subIndex}>
                  <label>{`Guide Preference ${mainIndex + 1}.${subIndex + 1}`}</label>
                  <select
                    value={subSelections[mainIndex][subIndex]}
                    onChange={(e) => handleSubSelect(mainIndex, subIndex, e.target.value)}
                  >
                    <option value="">select guide</option>
                    {subOptions[mainSelections[mainIndex]].map((option) => (
                      <option key={option} value={option} disabled={subSelections[mainIndex].includes(option)}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <button onClick={handleStorePreferences}>Store Preferences</button>

      <div>
        <h2>Stored Preferences</h2>
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
      </div>
    </div>
  );
};
