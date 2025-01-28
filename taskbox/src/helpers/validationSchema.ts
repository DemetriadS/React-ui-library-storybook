import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().max(10, "Name is too long"),
  address: Yup.string().max(50, "Address is too long"),
  email: Yup.string()
    .matches(
      /^[a-z]+\.[a-z]+@example\.com$/,
      "Email must match avery.sims@example.com format"
    )
    .email("Invalid email format"),
  phone: Yup.string()
    .matches(
      /^\(\d{3}\) \d{3}-\d{4}$/,
      "Phone must match (453) 439-1408 format"
    )
    .required("Phone number is required"),
  age: Yup.number()
    .typeError("Age must be a number")
    .min(18, "Age must be between 18 and 90")
    .max(90, "Age must be between 18 and 90"),
});

export default validationSchema;
