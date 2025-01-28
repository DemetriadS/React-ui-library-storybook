import React from "react";
import "./Container.css";
import { ContainerProps } from "../../types";

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <div className="container" style={style}>
      {children}
    </div>
  );
};

export default Container;
