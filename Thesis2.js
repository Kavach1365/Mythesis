import React, { useState } from 'react';

const domains = [
  { name: "", guide: [] },
  { name: "Blockchain", guide: ["B1", "B2", "B3", "B4"] },
  { name: "CyberSecurity", guide: ["C1", "C2", "New C3"] },
  { name: "IOT", guide: ["I1", "I2", "I3"] },
];

export const Thesis2 = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(3).fill(''));
  const [domain, setDomain] = useState("");
  const [guide, setGuide] = useState("");

  const handleSelect = (index, value) => {
    // Update selected options
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] = value;
    setSelectedOptions(updatedOptions);

    // Find the corresponding domain based on the selected option
    const selectedDomain = domains.find(d => d.name === value);

    // Update domain and reset guide in Thesis component
    setDomain(selectedDomain ? selectedDomain.name : "");
    setGuide("");

    // If needed, disable the selected option in Thesis component
    // You can add your own conditions for disabling options here
  };

  const handleDomainChange = (e) => {
    const selectedDomain = e.target.value;
    setDomain(selectedDomain);
    setGuide("");
  };

  return (
    <div>
      <div>
        {selectedOptions.map((selectedOption, index) => (
          <div key={index}>
            <label>{`Preference ${index + 1}`}</label>
            <select
              value={selectedOption}
              onChange={(e) => handleSelect(index, e.target.value)}
            >
              <option value="">Select your domain</option>
              {domains.map((option) => (
                <option key={option.name} value={option.name} disabled={selectedOptions.includes(option.name) && selectedOptions.indexOf(option.name) !== index}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div>
        <p>Welcome to Thesis Page <br /> Select Domain and Guide Preferences </p>
        <select onChange={handleDomainChange} value={domain}>
          {domains.map((d) => (
            <option key={d.name} value={d.name}>
              {d.name || "Select Domain"}
            </option>
          ))}
        </select>
        <select value={guide} disabled={domain === ""}>
          <option value="">Select guide</option>
          {domains.find((d) => d.name === domain)?.guide.map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

