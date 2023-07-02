// import * as Yup from "yup";
// import { useSelector } from "react-redux";

// const { users, loading } = useSelector((state) => state.user)

// export const userLogInSchema = Yup.object({
//     email: Yup.string().email().required("Please enter your email"),
//     password: Yup.string().min(6).required("Please enter your password"),
// });

import * as Yup from 'yup';
import { useSelector } from 'react-redux';

// Define the Yup schema for sign-up validation
const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .test('unique-email', 'Email already exists', function (value) {
      const users = useSelector((state) => state.users); // Assuming users is the slice of state containing user data
      return !users.some((user) => user.email === value);
    }),
  // Add other fields and validation rules here
});
