import React from "react";
import { Typography } from "../components";

export default {
  title: "Example/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "p",
          "subtitle1",
          "subtitle2",
          "body1",
          "body2",
        ],
      },
      description: "Defines the HTML tag and typography style",
      defaultValue: "body1",
    },
    className: {
      control: "text",
      description: "Additional custom CSS class",
    },
    textColor: {
      control: "color",
      description: "Color of the text",
      defaultValue: "#000000",
    },
    style: {
      control: "object",
      description: "Inline styles for customization",
    },
    children: {
      control: "text",
      description: "The content to be displayed inside the typography",
      defaultValue: "Sample text",
    },
  },
};

export const Default = () => (
  <Typography variant="body1">Default style</Typography>
);

export const AllVariants = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <Typography variant="h1">Heading 1</Typography>
    <Typography variant="h2">Heading 2</Typography>
    <Typography variant="h3">Heading 3</Typography>
    <Typography variant="h4">Heading 4</Typography>
    <Typography variant="h5">Heading 5</Typography>
    <Typography variant="h6">Heading 6</Typography>
    <Typography variant="p">Paragraph</Typography>
    <Typography variant="subtitle1">Subtitle 1</Typography>
    <Typography variant="subtitle2">Subtitle 2</Typography>
    <Typography variant="body1">Body 1</Typography>
    <Typography variant="body2">Body 2</Typography>
  </div>
);

export const CustomColor = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <Typography variant="h1" textColor="#FF5733">
      Custom Red Heading
    </Typography>
    <Typography variant="h2" textColor="#33A1FF">
      Custom Blue Heading
    </Typography>
    <Typography variant="body1" textColor="#32CD32">
      Custom Green Body Text
    </Typography>
  </div>
);

export const CustomStyle = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    <Typography
      variant="h1"
      style={{
        fontSize: "3rem",
        fontWeight: "bold",
        letterSpacing: "2px",
        textTransform: "uppercase",
      }}
    >
      Custom Styled Heading
    </Typography>
    <Typography
      variant="body1"
      style={{
        fontStyle: "italic",
        color: "#888",
      }}
    >
      Custom Styled Body Text
    </Typography>
  </div>
);

export const WithClassName = () => (
  <div>
    <Typography
      variant="h1"
      className="custom-heading-class"
      textColor="#0000FF"
    >
      Custom Class Heading
    </Typography>
    <Typography
      variant="body1"
      className="custom-body-class"
      textColor="#000000"
    >
      Custom Class Body Text
    </Typography>
  </div>
);
