import React, { useState } from "react";
import useDataFetch from "../../hooks/useDataFetch";
import { User, Filters } from "../../types";
import {
  API_URL,
  ERROR_MESSAGES,
  FILTER_PLACEHOLDERS,
} from "../../utils/constants";
import { Typography, UserCard, Input, Checkbox } from "../";
import filterUsers from "./filterUsers";
import "./DataList.css";
import validationSchema from "../../helpers/validationSchema";

interface DataListProps {
  style?: React.CSSProperties;
  userCardStyle?: React.CSSProperties;
}

const DataList: React.FC<DataListProps> = ({ style, userCardStyle }) => {
  const { data, error, loading } = useDataFetch<{ results: User[] }>(API_URL);

  const [filters, setFilters] = useState<Filters>({
    name: "",
    address: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
  });

  const [errors, setErrors] = useState<Filters>({
    name: "",
    address: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
  });

  const filterFields = [
    {
      key: "name",
      label: "Name",
      placeholder: FILTER_PLACEHOLDERS.NAME,
      type: "text",
    },
    {
      key: "address",
      label: "Address",
      placeholder: FILTER_PLACEHOLDERS.ADDRESS,
      type: "text",
    },
    {
      key: "email",
      label: "Email",
      placeholder: FILTER_PLACEHOLDERS.EMAIL,
      type: "text",
    },
    {
      key: "phone",
      label: "Phone",
      placeholder: FILTER_PLACEHOLDERS.PHONE_NUMBER,
      type: "text",
    },
    {
      key: "age",
      label: "Age",
      placeholder: FILTER_PLACEHOLDERS.AGE,
      type: "number",
    },
  ];

  const handleInputChange = async (key: string, value: string | number) => {
    if (!value) {
      setErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    } else {
      try {
        await validationSchema.validateAt(key, { [key]: value });
        setErrors((prev) => ({
          ...prev,
          [key]: "",
        }));
      } catch (err) {
        if (err) {
          setErrors((prev) => ({
            ...prev,
            [key]: err.message,
          }));
        }
      }
    }

    setFilters((prev) => ({
      ...prev,
      [key]: typeof value === "number" ? value.toString() : value,
    }));
  };

  const handleGenderChange = (checked: boolean, gender: "male" | "female") => {
    setFilters((prev) => ({
      ...prev,
      gender: checked ? gender : "",
    }));
  };

  const filteredUsers = data?.results ? filterUsers(data.results, filters) : [];

  if (loading) {
    return <Typography variant="p">Loading data list...</Typography>;
  }

  if (error) {
    return <Typography variant="p">{error.message}</Typography>;
  }

  if (!data) {
    return <Typography variant="p">{ERROR_MESSAGES.NO_DATA}</Typography>;
  }

  return (
    <div className="data-list-container" style={style}>
      <Typography
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          padding: "0 14px",
        }}
        textColor="#90caf9"
      >
        {FILTER_PLACEHOLDERS.FILTER_USER}
      </Typography>
      <div className="filter-section" style={style}>
        {filterFields.map(({ key, label, placeholder, type }) => (
          <Input
            style={{ color: "#fff" }}
            key={key}
            type={type as "number" | "text"}
            value={filters[key]}
            onChange={(value) => handleInputChange(key, value)}
            placeholder={placeholder}
            label={label}
            error={errors[key]}
          />
        ))}

        <div className="gender-filter" style={style}>
          <Typography variant="h3" textColor="#fff">
            {FILTER_PLACEHOLDERS.FILTER_GENDER}
          </Typography>
          <Checkbox
            label="Male"
            checked={filters.gender === "male"}
            onChange={(checked) => handleGenderChange(checked, "male")}
          />
          <Checkbox
            label="Female"
            checked={filters.gender === "female"}
            onChange={(checked) => handleGenderChange(checked, "female")}
          />
        </div>
      </div>

      <div className="data-list" style={style}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <UserCard key={index} user={user} style={userCardStyle} />
          ))
        ) : (
          <Typography variant="p">
            {ERROR_MESSAGES.NO_USERS_AVAILABLE}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default DataList;
