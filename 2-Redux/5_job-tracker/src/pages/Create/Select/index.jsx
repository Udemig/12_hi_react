import React from "react";

const Select = ({ label, name, options, handleChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label} </label>
      <select name={name} id={name} onChange={handleChange}>
        <option value="">Seçiniz</option>

        {/* Dinamik Options */}
        {options.map((i) => (
          <option key={i}>{i}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
