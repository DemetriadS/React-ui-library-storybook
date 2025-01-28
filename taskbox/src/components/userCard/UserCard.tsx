import React from "react";
import { User } from "../../types";
import { Typography, Icon } from "../index";
import "./UserCard.css";
import { USER_CARD_TEXT } from "../../utils/constants";
import { useVisibilitySensor } from "../../hooks/useVisibilitySensor";

interface UserCardProps {
  user: User;
  style?: React.CSSProperties;
}

const UserCard: React.FC<UserCardProps> = ({ user, style }) => {
  const { isVisible, elementRef } = useVisibilitySensor();

  return (
    <div ref={elementRef} className="user-card" style={style}>
      {!isVisible ? (
        <div className="user-card-placeholder">
          <Typography variant="p">Loading user details...</Typography>
        </div>
      ) : (
        <>
          <Icon
            src={user.picture.large}
            size={128}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <Typography variant="h2">{`${user.name.title} ${user.name.first} ${user.name.last}`}</Typography>
          <Typography variant="p">
            <strong>{USER_CARD_TEXT.GENDER}</strong> {user.gender}
          </Typography>
          <Typography variant="p">
            <strong>{USER_CARD_TEXT.LOCATION}</strong>{" "}
            {`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country} - ${user.location.postcode}`}
          </Typography>
          <Typography variant="p">
            <strong>{USER_CARD_TEXT.EMAIL}</strong> {user.email}
          </Typography>
          <Typography variant="p">
            <strong>{USER_CARD_TEXT.PHONE_NUMBER}</strong> {user.phone}
          </Typography>
          <Typography variant="p">
            <strong>{USER_CARD_TEXT.AGE}</strong> {user.dob.age} (
            {new Date(user.dob.date).toLocaleDateString()})
          </Typography>
        </>
      )}
    </div>
  );
};

export default UserCard;
