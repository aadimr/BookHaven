import * as Yup from "yup";

export const getInTouchSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    name: Yup.string().min(2, "Name must be at least 2 characters").matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, "Must be alphabet").required("Please enter the name"),
    subject: Yup.string().min(2, "Subjest must be at least 2 characters").matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, "Must be alphabet").required("Please enter the subjest"),
    message: Yup.string().min(2, "Message must be at least 2 characters").matches(/^\S.*$/, "Not valid").required("Please enter your message"),
})

export const checkEmailExists = async (email) => {
    try {
        const response = await fetch(`https://64abec939edb4181202ecce5.mockapi.io/GetInTouch?email=${encodeURIComponent(email)}`);
        if (!response.ok) {
            throw new Error('Failed to check email existence');
        }
        const data = await response.json();
        return data.length > 0;
    } catch (error) {
        throw new Error('Failed to check email existence');
    }
};