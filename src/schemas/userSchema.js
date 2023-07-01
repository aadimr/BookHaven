import * as Yup from "yup";

export const userSignUpSchema = Yup.object({
    user_Name: Yup.string().min(2, "Name must be at least 2 characters").matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, "Must be alphabet").required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_Password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required("Please enter your confirm password"),
});