import React from "react";
import "./Button.css";
import { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  href = "",
  style,
}) => {
  const sizeClass = `button-${size}`;

  if (href) {
    return (
      <a
        href={href}
        className={`button ${variant} ${sizeClass} ${className} ${
          disabled ? "disabled" : ""
        }`}
        style={style}
        onClick={(e) => disabled && e.preventDefault()}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      className={`button ${variant} ${sizeClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
