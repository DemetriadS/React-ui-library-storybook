import React, { FC } from "react";
import { TypographyProps } from "../../types";

const elementMap: Record<
  TypographyProps["variant"],
  keyof JSX.IntrinsicElements
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  subtitle1: "h2",
  subtitle2: "h2",
  body1: "span",
  body2: "span",
};

const Typography: FC<TypographyProps> = ({
  variant = "body1",
  className,
  textColor,
  style,
  children,
}) => {
  const Component = elementMap[variant];

  return (
    <Component
      className={`typography ${variant} ${className || ""}`}
      style={{ ...style, color: textColor }}
    >
      {children}
    </Component>
  );
};

export default Typography;
