import React from "react";
import { Tab, TabList, TabPanel, Tabs, Typography } from "../components";

export default {
  title: "Example/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "number",
      description: "The index of the currently selected tab.",
    },
    orientation: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
      description: "Orientation of the tab list.",
    },
    textColor: {
      control: "color",
      description: "Text color of the tabs.",
    },
    backgroundColor: {
      control: "color",
      description: "Background color of the tab list.",
    },
    children: {
      control: "text",
      description: "Content inside the TabPanels.",
    },
    iconPosition: {
      control: {
        type: "select",
        options: ["left", "right"],
      },
      description: "Position of the icon relative to the label.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the tab if true.",
    },
  },
};

export const Default = () => (
  <Tabs
    value={0}
    orientation="vertical"
    textColor="#fff"
    backgroundColor="#3d444d"
  >
    <TabList>
      <Tab index={0} label="Tab 1" />
      <Tab index={1} label="Tab 2" />
      <Tab index={2} label="Tab 3" />
    </TabList>
    <TabPanel index={0}>Content for Tab 1</TabPanel>
    <TabPanel index={1}>Content for Tab 2</TabPanel>
    <TabPanel index={2}>Content for Tab 3</TabPanel>
  </Tabs>
);

export const Vertical = () => (
  <Tabs
    value={0}
    orientation="horizontal"
    textColor="#fff"
    backgroundColor="#3d444d"
  >
    <TabList>
      <Tab index={0} label="Home" />
      <Tab index={1} label="Explore" />
      <Tab index={2} label="Settings" />
    </TabList>
    <TabPanel index={0} style={{ height: "10rem", width: "48rem" }}>
      Home Content 1
    </TabPanel>
    <TabPanel index={1} style={{ height: "10rem", width: "48rem" }}>
      Explore Content
    </TabPanel>
    <TabPanel index={2} style={{ height: "10rem", width: "48rem" }}>
      Settings Content
    </TabPanel>
  </Tabs>
);

export const WithIcons = () => (
  <Tabs
    value={0}
    orientation="horizontal"
    textColor="#fff"
    backgroundColor="#3d444d"
  >
    <TabList style={{ width: "9rem" }}>
      <Tab index={0} label="Home" icon="🏠" iconPosition="left" />
      <Tab index={1} label="Explore" icon="📊" iconPosition="right" />
    </TabList>
    <TabPanel index={0} style={{ height: "10rem", width: "48rem" }}>
      Icon on left
    </TabPanel>
    <TabPanel index={1} style={{ height: "10rem", width: "48rem" }}>
      Icon on right
    </TabPanel>
  </Tabs>
);

export const DisabledTab = () => (
  <Tabs
    value={0}
    orientation="horizontal"
    textColor="#fff"
    backgroundColor="#3d444d"
  >
    <TabList style={{ width: "9rem" }}>
      <Tab index={0} label="Home" />
      <Tab index={1} label="Disabled" disabled />
    </TabList>
    <TabPanel index={0} style={{ height: "10rem", width: "48rem" }}>
      Home Content
    </TabPanel>
    <TabPanel index={1} style={{ height: "10rem", width: "48rem" }}>
      Disabled Content
    </TabPanel>
  </Tabs>
);
