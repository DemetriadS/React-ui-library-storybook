import { ReactNode } from "react";

export type TabProps = {
  index: number;
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  classes?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  orientation?: string;
  iconPosition?: "left" | "right";
  label?: string;
  value?: any;
};

export interface TabsProps {
  children: ReactNode;
  value?: number;
  centered?: boolean;
  orientation?: "horizontal" | "vertical";
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  classes?: string;
}

export interface TabsContextType {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  orientation?: "horizontal" | "vertical";
  centered?: boolean;
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
}

export interface TabPanelProps {
  index: number;
  style?: React.CSSProperties;
  orientation?: "horizontal" | "vertical";
  children: ReactNode;
}

export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number | string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export interface TypographyProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2";
  textColor?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
export interface Filters {
  name: string;
  address: string;
  email: string;
  phone: string;
  age: string;
  gender: "male" | "female" | "";
}
