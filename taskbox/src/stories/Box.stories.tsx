import React from "react";
import { Box } from "../components";

export default {
  title: "Example/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    justifyContent: {
      control: {
        type: "select",
        options: [
          "flex-start",
          "center",
          "flex-end",
          "space-between",
          "space-around",
          "space-evenly",
        ],
      },
      description: "Controls the `justify-content` CSS property.",
    },
    alignItems: {
      control: {
        type: "select",
        options: ["flex-start", "center", "flex-end", "stretch", "baseline"],
      },
      description: "Controls the `align-items` CSS property.",
    },
    flexDirection: {
      control: {
        type: "select",
        options: ["row", "column", "row-reverse", "column-reverse"],
      },
      description: "Controls the `flex-direction` CSS property.",
    },
    children: {
      control: "text",
      description: "Content inside the Box component.",
    },
  },
};

export const Default = {
  args: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    children: "This is the default Box",
    style: {
      width: "200px",
      height: "200px",
      backgroundColor: "#f0f0f0",
      border: "1px solid #ddd",
    },
  },
};

export const CustomStyles = {
  args: {
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexDirection: "row",
    children: (
      <>
        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "#ff6347",
          }}
        >
          Item 1
        </div>
        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "#4caf50",
          }}
        >
          Item 2
        </div>
        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "#1e90ff",
          }}
        >
          Item 3
        </div>
      </>
    ),
    style: { width: "300px", height: "150px", border: "1px dashed #ccc" },
  },
};
