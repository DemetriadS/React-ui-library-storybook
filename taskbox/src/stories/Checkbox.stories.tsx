import React from "react";
import { Checkbox } from "../components";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The label text displayed next to the checkbox.",
      defaultValue: "Checkbox Label",
    },
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked or not.",
    },
    labelColor: {
      control: "color",
      description: "The color of the label text.",
      defaultValue: "#000000",
    },
    onChange: {
      action: "changed",
      description:
        "Callback function triggered when the checkbox value changes.",
    },
  },
};

export const Default = {
  args: {
    checked: false,
  },
};

export const WithLabel = {
  args: {
    label: "Checkbox with label",
    checked: false,
    labelColor: "#000000",
  },
};

export const Checked = {
  args: {
    label: "Checked Checkbox",
    checked: true,
    labelColor: "#000000",
  },
};

export const NewLabelColor = {
  args: {
    label: "New Label Color",
    checked: false,
    labelColor: "#ff6347",
  },
};
