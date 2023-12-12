import React, { useState } from 'react';

export const Thesis2 = () => {
  const mainOptions = ['Main Option 1', 'Main Option 2', 'Main Option 3'];
  const subOptions = [
    ['Sub Option A1', 'Sub Option B1', 'Sub Option C1'],
    ['Sub Option A2', 'Sub Option B2', 'Sub Option C2'],
    ['Sub Option A3', 'Sub Option B3', 'Sub Option C3']
  ];

  const [mainSelections, setMainSelections] = useState(Array(mainOptions.length).fill(''));
  const [subSelections, setSubSelections] = useState(Array(mainOptions.length).fill([]));
  const [mainCompleted, setMainCompleted] = useState(Array(mainOptions.length).fill(false));

  const handleMainSelect = (index, value) => {
    const updatedMainSelections = [...mainSelections];
    updatedMainSelections[index] = value;
    setMainSelections(updatedMainSelections);

    // Reset the corresponding sub-selection when a main option is selected
    const updatedSubSelections = [...subSelections];
    updatedSubSelections[index] = Array(subOptions[index].length).fill('');
    setSubSelections(updatedSubSelections);

    // Mark the current main dropdown as completed
    const updatedMainCompleted = [...mainCompleted];
    updatedMainCompleted[index] = true;
    setMainCompleted(updatedMainCompleted);
  };

  const handleSubSelect = (mainIndex, subIndex, value) => {
    const updatedSubSelections = [...subSelections];
    updatedSubSelections[mainIndex][subIndex] = value;
    setSubSelections(updatedSubSelections);
  };

  return (
    <div>
      {mainOptions.map((mainOption, mainIndex) => (
        <div key={mainIndex}>
          <label>{`Main Box ${mainIndex + 1}`}</label>
          <select
            value={mainSelections[mainIndex]}
            onChange={(e) => handleMainSelect(mainIndex, e.target.value)}
          >
            <option value="">Select a main option</option>
            {mainOptions.map((option) => (
              <option key={option} value={option} disabled={mainSelections.includes(option) && mainSelections.indexOf(option) !== mainIndex}>
                {option}
              </option>
            ))}
          </select>

          {mainCompleted[mainIndex] && (
            <div>
              {subOptions[mainIndex].map((subOption, subIndex) => (
                <div key={subIndex}>
                  <label>{`Sub Box ${mainIndex + 1}.${subIndex + 1}`}</label>
                  <select
                    value={subSelections[mainIndex][subIndex]}
                    onChange={(e) => handleSubSelect(mainIndex, subIndex, e.target.value)}
                  >
                    <option value="">Select a sub option</option>
                    {subOptions[mainIndex].map((option) => (
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
    </div>
  );
};

//export default Dropdowns;
