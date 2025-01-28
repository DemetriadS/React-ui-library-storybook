import React from "react";
import { Button, Container, Typography } from "../components";

export default {
  title: "Example/Container",
  component: Container,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Content to be rendered inside the container.",
      defaultValue: "Default Container Content",
    },
    className: {
      control: "text",
      description: "Additional class names for custom styling.",
      defaultValue: "",
    },
    style: {
      control: "object",
      description: "Inline styles for custom container styling.",
    },
  },
};

export const Default = {
  args: {
    children: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          margin: "20px",
        }}
      >
        <Typography variant="p">
          This is a representation of the container.
        </Typography>
        <Typography variant="p">This is what it can hold.</Typography>
        <Button variant="outline" onClick={() => {}}>
          Click here
        </Button>
      </div>
    ),
    className: "",
    style: {
      backgroundColor: "#fff",
      border: "1px solid black",
    },
  },
};

export const CustomStyledContainer = {
  args: {
    children: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <Typography variant="p">This container has custom styling.</Typography>
        <Typography variant="p">
          You can define this class in your global CSS
        </Typography>
        <Button variant="outline" onClick={() => {}}>
          Click here
        </Button>
      </div>
    ),
    className: "custom-container",
    style: {
      backgroundColor: "#ff6347",
    },
  },
};
