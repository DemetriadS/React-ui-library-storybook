import React from "react";
import { Button } from "../components";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "contained", "outline"],
      description: "The style variant of the button.",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the button.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the button if true.",
    },
    href: {
      control: "text",
      description: "If provided, renders the button as a link.",
    },
    children: {
      control: "text",
      description: "The content inside the button.",
    },
    onClick: {
      action: "clicked",
      description: "Function to handle click events.",
    },
  },
};

export const Primary = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "medium",
    disabled: false,
  },
};

export const Outline = {
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "medium",
    disabled: false,
  },
};

export const Small = {
  args: {
    children: "Small Button",
    size: "small",
    variant: "contained",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    children: "Disabled Button",
    size: "medium",
    variant: "primary",
    disabled: true,
  },
};
