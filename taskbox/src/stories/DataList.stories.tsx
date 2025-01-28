import React from "react";
import { DataList } from "../components";

export default {
  title: "Example/DataList",
  component: DataList,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    style: {
      control: "object",
      description: "Inline styles for data list container styling.",
    },
    userCardStyle: {
      control: "object",
      description: "Inline styles for custom UserCard styling.",
    },
  },
};

export const Default = () => {
  return (
    <DataList
      style={{ backgroundColor: "#1b1b1b", color: "#fff" }}
      userCardStyle={{ width: "44%" }}
    />
  );
};

export const CustomStyle = () => {
  return (
    <DataList
      style={{ backgroundColor: "cadetblue", color: "black" }}
      userCardStyle={{ width: "44%" }}
    />
  );
};
