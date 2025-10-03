import React from "react";
import "../styles/dropdown.css";

const Dropdown = ({ options, onSelect, currValue }) => {
    console.log(options)

  return (
    <select className="dropdown" onChange={(e) => onSelect(e.target.value)} value={currValue}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  );
};

export default Dropdown;
