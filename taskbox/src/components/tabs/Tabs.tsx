import React, { createContext, FC, useContext, useState } from "react";
import { TabsContextType, TabsProps } from "../../types";
import "./Tabs.css";

const TabsContext = createContext<TabsContextType>({
  activeIndex: 0,
  setActiveIndex: () => {},
  orientation: "vertical",
  backgroundColor: "",
  centered: false,
  borderColor: "",
  textColor: "",
});

const Tabs: FC<TabsProps> = ({
  children,
  value,
  centered,
  orientation = "vertical",
  backgroundColor,
  borderColor,
  textColor,
  classes,
}) => {
  const [activeIndex, setActiveIndex] = useState(value ?? 0);

  const tabClasses = `tabs ${orientation} ${classes || ""}`;

  return (
    <TabsContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        orientation,
        centered,
        backgroundColor,
        borderColor,
        textColor,
      }}
    >
      <div className={tabClasses} style={{ color: "fff" }}>
        <div className={tabClasses}>{children}</div>
      </div>
    </TabsContext.Provider>
  );
};

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  return context;
};

export default Tabs;
