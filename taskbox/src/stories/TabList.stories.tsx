import React from "react";
import { Tab, TabList, Tabs } from "../components";

export default {
  title: "Example/TabList",
  component: TabList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
      description: "Orientation of the tabs.",
    },
    textColor: {
      control: "color",
      description: "Text color of the tabs.",
    },
    backgroundColor: {
      control: "color",
      description: "Background color of the tabs.",
    },
    value: {
      control: "number",
      description: "Index of the currently active tab.",
    },
    children: {
      control: "text",
      description: "Content inside the TabList.",
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
    </TabList>
  </Tabs>
);

export const WithIcons = () => (
  <Tabs
    value={0}
    orientation="horizontal"
    textColor="#fff"
    backgroundColor="#3d444d"
  >
    <TabList>
      <Tab index={0} label="Home" icon="🏠" iconPosition="left" />
      <Tab index={1} label="Explore" icon="📊" iconPosition="right" />
    </TabList>
  </Tabs>
);

export const DisabledTab = () => (
  <Tabs
    value={0}
    orientation="horizontal"
    textColor="#fff"
    backgroundColor="#3d444d"
  >
    <TabList>
      <Tab index={1} label="Disabled" disabled />
    </TabList>
  </Tabs>
);
