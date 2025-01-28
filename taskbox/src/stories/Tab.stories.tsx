import React from "react";
import { Tab } from "../components";

export default {
  title: "Example/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The label of the tab.",
    },
    icon: {
      control: "text",
      description: "The icon for the tab.",
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
      description: "The position of the icon relative to the label.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the tab if true.",
    },
    index: {
      control: "number",
      description: "The index of the tab.",
    },
  },
};

export const Default = () => (
  <Tab index={0} label="Home" icon="🏠" iconPosition="left" />
);

export const Disabled = () => <Tab index={0} label="Disabled Tab" disabled />;

export const WithIconOnLeft = () => (
  <Tab index={0} label="Tab with Icon" icon="🔔" iconPosition="left" />
);

export const WithIconOnRight = () => (
  <Tab index={0} label="Tab with Icon" icon="🔔" iconPosition="right" />
);
