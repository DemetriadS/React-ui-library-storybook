import React from "react";
import { useTabsContext } from "../tabs/Tabs";
import { TabPanelProps } from "../../types";
import "./TabPanel.css";

const TabPanel: React.FC<TabPanelProps> = ({ index, children, style }) => {
  const { activeIndex, orientation } = useTabsContext();
  return (
    activeIndex === index && (
      <div
        className={`tab-panel ${orientation === "horizontal" && `horizontal`}`}
        style={style}
      >
        {children}
      </div>
    )
  );
};

export default TabPanel;
