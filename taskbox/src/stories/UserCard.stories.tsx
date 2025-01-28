import React from "react";
import { UserCard } from "../components";
import { User } from "../types";

export default {
  title: "Example/UserCard",
  component: UserCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    user: {
      control: "object",
      description:
        "The user object containing detailed information about the user.",
      table: {
        type: { summary: "User" },
        defaultValue: { summary: "{}" },
      },
    },
    style: {
      control: "object",
      description: "Inline styles for custom container styling.",
    },
  },
};

const user: User = {
  gender: "female",
  name: {
    title: "Ms",
    first: "Amanda",
    last: "Lambert",
  },
  location: {
    street: {
      number: 2836,
      name: "Poplar Dr",
    },
    city: "South Valley",
    state: "Kansas",
    country: "United States",
    postcode: 89253,
    coordinates: {
      latitude: "-3.0406",
      longitude: "96.5201",
    },
    timezone: {
      offset: "-10:00",
      description: "Hawaii",
    },
  },
  email: "amanda.lambert@example.com",
  login: {
    uuid: "7db84ba2-d42e-409f-81e0-1119544c2e8e",
    username: "purpleduck321",
    password: "ladies",
    salt: "zEHDBZtv",
    md5: "0dd180afbaafb06be0b3961caa0bb466",
    sha1: "bdcfdf1f96cd13d70320fb5b3ee3b660e0488f74",
    sha256: "fc91904e1240128534789a5f392d325c053f57f4c1e90f43202d79f299bf362d",
  },
  dob: {
    date: "1949-04-19T06:05:27.512Z",
    age: 75,
  },
  registered: {
    date: "2020-01-25T19:13:39.385Z",
    age: 5,
  },
  phone: "(220) 381-8905",
  cell: "(837) 449-7091",
  id: {
    name: "SSN",
    value: "302-01-7175",
  },
  picture: {
    large: "https://randomuser.me/api/portraits/women/75.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/75.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/75.jpg",
  },
  nat: "US",
};

export const Default = () => <UserCard style={{ width: "auto" }} user={user} />;

export const Custom = () => {
  return (
    <UserCard
      style={{
        width: "auto",
        backgroundColor: "beige",
        fontSize: "large",
        fontStyle: "italic",
      }}
      user={user}
    />
  );
};
