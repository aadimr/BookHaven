import * as Yup from "yup";

export const bestSellingBookSchema = Yup.object({
    img:Yup.string().required("Please enter the image URL"),
    book_Name: Yup.string().min(2).required("Please enter the book name"),
    author_Name: Yup.string().min(2).required("Please enter the author name"),
    review: Yup.number().required("Please enter the review"),
    price: Yup.number().required("Please enter the price")
})