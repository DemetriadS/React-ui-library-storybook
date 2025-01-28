import React, { ChangeEvent } from "react";
import "./Input.css";
import { InputProps } from "../../types";

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder = "",
  label,
  error,
  style,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (type === "number") {
      const numericValue = value === "" ? "" : parseFloat(value);
      onChange(numericValue);
    } else {
      onChange(value);
    }
  };

  return (
    <div className="input-container">
      {label && (
        <label className="input-label" style={style}>
          {label}
        </label>
      )}
      <input
        className={`input-field ${error ? "error" : ""}`}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Input;
