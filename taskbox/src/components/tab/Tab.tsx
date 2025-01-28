import React from "react";
import { TabProps } from "../../types";
import { useTabsContext } from "../tabs/Tabs";
import { Typography } from "../";
import "./Tab.css";

const Tab: React.FC<TabProps> = ({
  index,
  children,
  classes = "",
  disabled = false,
  icon,
  iconPosition = "left",
  label,
}) => {
  const {
    activeIndex,
    setActiveIndex,
    orientation,
    textColor,
    backgroundColor,
    borderColor,
  } = useTabsContext();
  const isActive = index === activeIndex;

  const onClick = () => setActiveIndex(index);

  return (
    <button
      className={`tab ${isActive ? "active" : ""} ${
        disabled ? "disabled" : ""
      } ${orientation === "horizontal" && `horizontal`}${classes}`}
      onClick={onClick}
      disabled={disabled}
      style={{
        color: textColor,
        backgroundColor: backgroundColor,
        borderColor: isActive ? borderColor : undefined,
      }}
    >
      {icon && iconPosition === "left" && (
        <Typography variant="body1" className="tab-icon left">
          {icon}
        </Typography>
      )}
      {label || children}
      {icon && iconPosition === "right" && (
        <Typography variant="body1" className="tab-icon right">
          {icon}
        </Typography>
      )}
    </button>
  );
};

export default Tab;
