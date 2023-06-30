import * as Yup from "yup";

export const bestSellingBookSchema = Yup.object({
    img:Yup.string().matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif)/, "Must be an image URL(jpg|jpeg|png|gif)").required("Please enter the image URL"),
    book_Name: Yup.string().min(2, "Book name must be at least 2 characters").matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, "Must be alphabet").required("Please enter the book name"),
    author_Name: Yup.string().min(2, "Author name must be at least 2 characters").matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, "Must be alphabet").required("Please enter the author name"),
    price: Yup.string().matches(/^[0-9]+$/, "Price must be number").required("Please enter the price"),
    review: Yup.string().matches(/^[0-9]+$/, "Review must be number").test('max-value', 'Review must be less than or equal to 5', value => value <= 5).required("Please enter the review"),
})
  
  