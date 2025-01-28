import React, { useState } from "react";
import { Input } from "../components";

export default {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select", options: ["text", "number"] },
      description: "The type of input field.",
      defaultValue: "text",
    },
    value: {
      control: "text",
      description: "The value of the input field.",
      defaultValue: "20",
    },
    onChange: {
      action: "changed",
      description: "Callback function triggered when the input value changes.",
    },
    placeholder: {
      control: "text",
      description: "The placeholder text of the input field.",
      defaultValue: "Enter text here",
    },
    label: {
      control: "text",
      description: "The label for the input field.",
    },
    error: {
      control: "text",
      description: "The error message to display under the input field.",
    },
    style: {
      control: "object",
      description: "Inline styles for custom container styling.",
    },
  },
};

export const Default = () => {
  const [value, setValue] = useState("");
  const handleChange = (newValue: string | (number | "")) =>
    setValue(newValue as string);

  return (
    <Input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Enter text here"
      label="Text Input"
    />
  );
};

export const NumberInput = () => {
  const [value, setValue] = useState(22);
  const handleChange = (newValue: string | (number | "")) =>
    setValue(newValue as number);

  return (
    <Input
      type="number"
      value={value}
      onChange={handleChange}
      placeholder="Enter a number"
      label="Number Input"
    />
  );
};

export const WithStyling = () => {
  const [value, setValue] = useState("Hello World");
  const handleChange = (newValue: string | (number | "")) =>
    setValue(newValue as string);

  return (
    <Input
      style={{ color: "blue" }}
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Enter a number"
      label="Number Input"
    />
  );
};

export const WithError = () => {
  const [value, setValue] = useState("Error Message");
  const handleChange = (newValue: string | (number | "")) =>
    setValue(newValue as string);

  return (
    <Input
      type="text"
      style={{ color: "#ed2939" }}
      value={value}
      onChange={handleChange}
      placeholder="Enter text here"
      label="Text Input with Error"
      error="This field is required."
    />
  );
};
