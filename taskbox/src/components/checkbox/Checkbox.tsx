import React from "react";
import "./Checkbox.css";

interface CheckboxProps {
  label?: string;
  checked: boolean;
  labelColor?: string;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  labelColor,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className="checkbox-container">
      <label style={{ color: labelColor }}>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
