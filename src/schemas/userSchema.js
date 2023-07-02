import * as Yup from "yup";
// import { useSelector } from "react-redux";

export const userSignUpSchema = Yup.object({
    user_Name: Yup.string().min(2, "Name must be at least 2 characters").matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, "Must be alphabet").required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_Password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required("Please enter your confirm password"),
});


export const checkEmailExists = async (email) => {
    try {
        const response = await fetch(`https://64a05a68ed3c41bdd7a73ca1.mockapi.io/userInfo/userInfo?email=${encodeURIComponent(email)}`);
        if (!response.ok) {
            throw new Error('Failed to check email existence');
        }
        const data = await response.json();
        return data.length > 0; // Return true if data length is greater than 0 (email exists), false otherwise
    } catch (error) {
        throw new Error('Failed to check email existence');
    }
};
