import React from "react";
import { useTabsContext } from "../tabs/Tabs";
import "./TabList.css";
import { TabListProps } from "../../types";

const TabList: React.FC<TabListProps> = ({ children, style }) => {
  const { orientation, centered, backgroundColor } = useTabsContext();

  return (
    <div
      className={`tab-list ${orientation === "horizontal" && "horizontal"} ${
        centered && orientation === "vertical" ? `centered` : ""
      }`}
      style={{ backgroundColor, ...style }}
    >
      {children}
    </div>
  );
};

export default TabList;
