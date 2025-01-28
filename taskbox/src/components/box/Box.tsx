import React from "react";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  flexDirection?: React.CSSProperties["flexDirection"];
}

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
