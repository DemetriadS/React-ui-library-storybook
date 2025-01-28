import React from "react";
import { Icon } from "../components";

export default {
  title: "Example/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "The source URL of the image icon.",
      defaultValue: "/src/icons/DSIcon.png",
    },
    alt: {
      control: "text",
      description: "Alternative text for the icon.",
      defaultValue: "icon",
    },
    size: {
      control: "number",
      description: "Size of the icon in pixels.",
      defaultValue: 24,
    },
    style: {
      control: "object",
      description: "Custom styles for the icon.",
    },
  },
};

export const Default = () => (
  <Icon src="/src/icons/DSIcon.png" size={48} alt="Icon" />
);

export const CustomSize = () => (
  <div
    style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
  >
    <Icon src="/src/icons/DSIcon.png" alt="Custom size icon" size={50} />
    <Icon
      src="/src/icons/DSIcon.png"
      alt="Another custom size icon"
      size={100}
    />
  </div>
);

export const WithCustomStyle = () => (
  <div
    style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
  >
    <Icon
      src="/src/icons/DSIcon.png"
      alt="Styled icon"
      size={40}
      style={{
        border: "2px solid #000",
        borderRadius: "50%",
        padding: "5px",
        margin: "10px",
      }}
    />
    <Icon
      src="/src/icons/DSIcon.png"
      alt="Another styled icon"
      size={30}
      style={{
        backgroundColor: "#f0f0f0",
        borderRadius: "50%",
        padding: "8px",
        margin: "10px",
      }}
    />
  </div>
);
