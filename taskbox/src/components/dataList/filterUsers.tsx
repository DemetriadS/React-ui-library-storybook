import { Filters, User } from "../../types";

const filterUsers = (users: User[], filters: Filters): User[] => {
  return users.filter((user) => {
    const fullName =
      `${user.name.title} ${user.name.first} ${user.name.last}`.toLowerCase();
    const address =
      `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country} - ${user.location.postcode}`.toLowerCase();
    const email = user.email.toLowerCase();

    const normalizedPhone = user.phone.replace(/[^0-9]/g, "");

    const isNameMatch = fullName.includes(filters.name.toLowerCase());
    const isAddressMatch = address.includes(filters.address.toLowerCase());
    const isEmailMatch = email.includes(filters.email.toLowerCase());

    const isPhoneMatch =
      filters.phone === "" ||
      normalizedPhone.includes(filters.phone.replace(/[^0-9]/g, ""));

    const isAgeMatch =
      filters.age === "" || user.dob.age === Number(filters.age);

    const isGenderMatch =
      filters.gender === "" || user.gender === filters.gender;

    return (
      isNameMatch &&
      isAddressMatch &&
      isEmailMatch &&
      isPhoneMatch &&
      isAgeMatch &&
      isGenderMatch
    );
  });
};

export default filterUsers;
