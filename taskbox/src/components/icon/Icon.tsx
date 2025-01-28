import React, { CSSProperties } from "react";

interface IconProps {
  src: string;
  alt?: string;
  size?: number;
  style?: CSSProperties;
}

const Icon: React.FC<IconProps> = ({ src, alt = "icon", size = 24, style }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: "contain",
        display: "inline-block",
        ...style,
      }}
    />
  );
};

export default Icon;
