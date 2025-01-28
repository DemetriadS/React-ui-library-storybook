import React from "react";
import "./Container.css";

interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <div className="container" style={style}>
      {children}
    </div>
  );
};

export default Container;
