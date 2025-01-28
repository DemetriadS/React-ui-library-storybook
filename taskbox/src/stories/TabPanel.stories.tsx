import React from "react";
import { Tab, TabList, Tabs, TabPanel } from "../components";

export default {
  title: "Example/TabPanel",
  component: TabPanel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    index: {
      control: "number",
      description:
        "The index of the TabPanel that should be displayed when active.",
    },
    children: {
      control: "text",
      description: "Content of the TabPanel.",
    },
    style: {
      control: "object",
      description: "Custom style for the TabPanel.",
    },
  },
};

export const Default = () => {
  return (
    <Tabs value={0}>
      <TabList>
        <Tab index={0} label="Tab 1" />
      </TabList>
      <TabPanel index={0}>Content for Tab 1</TabPanel>
    </Tabs>
  );
};

export const VerticalOrientation = () => (
  <Tabs
    value={0}
    orientation="horizontal"
    textColor="#fff"
    backgroundColor="#3d444d"
  >
    <TabList>
      <Tab index={0} label="Home" />
    </TabList>
    <TabPanel index={0}>Home Content 1</TabPanel>
  </Tabs>
);

export const WithCustomStyle = () => {
  return (
    <Tabs value={1}>
      <TabList>
        <Tab index={0} label="Tab 1" />
        <Tab index={1} label="Tab 2" />
      </TabList>
      <TabPanel
        index={0}
        style={{
          padding: "1rem",
          backgroundColor: "#d1e7dd",
          borderRadius: "8px",
          transition: "background-color 0.3s ease",
        }}
      >
        Custom styled TabPanel 1
      </TabPanel>
      <TabPanel
        index={1}
        style={{
          padding: "1rem",
          backgroundColor: "#f8d7da",
          borderRadius: "8px",
          transition: "background-color 0.3s ease",
        }}
      >
        Custom styled TabPanel 2
      </TabPanel>
    </Tabs>
  );
};
