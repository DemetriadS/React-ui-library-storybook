import React from "react";
import { BoxProps } from "../../types";

const Box: React.FC<BoxProps> = ({
  children,
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "column",
  className,
  style,
  ...props
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection,
        justifyContent,
        alignItems,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Box;
