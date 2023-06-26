import style from "./AddBooks.module.css"
import Input from "../../components/input/Input";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Buttons from "../../components/button/Button";
import { useFormik } from "formik";
import { bestSellingBookSchema } from "../../schemas/schema";
import { useDispatch } from 'react-redux';
import { createBook } from "../../store/BooksSlice";

const initialValues = {
  img: "",
  book_Name: "",
  author_Name: "",
  review: "",
  price: "",
}

function AddBooks() {

  const dispatch = useDispatch()

  const { values, handleBlur, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: bestSellingBookSchema,
    onSubmit: (values, action) => {
      dispatch(createBook(values));
      action.resetForm();
    }
  })


  return (
    <div className={style.wrapper}>
      <Card sx={{
        width: "50vw",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className={style.inputDiv}>
            <label>Image URL:</label>
            <Input className={style.input} placeholder={"Enter Image URL"} name={"img"} value={values.img} onChange={handleChange} onBlur={handleBlur} />
              {errors.img && touched.img ? <p className={style.errorMessage}>*{errors.img}</p> : null}
            </div>
            <div className={style.inputDiv}>
              <label>Book Name:</label>
              <Input className={style.input} placeholder={"Enter Book Name"} name={"book_Name"} value={values.book_Name} onChange={handleChange} onBlur={handleBlur} />
              {errors.book_Name && touched.book_Name ? <p className={style.errorMessage}>*{errors.book_Name}</p> : null}
            </div>
            <div className={style.inputDiv}>
              <label>Author Name:</label>
              <Input className={style.input} placeholder={"Enter Author Name"} name={"author_Name"} value={values.author_Name} onChange={handleChange} onBlur={handleBlur} />
              {errors.author_Name && touched.author_Name ? <p className={style.errorMessage}>*{errors.author_Name}</p> : null}
            </div>
            <div className={style.inputDiv}>
              <label>Price:</label>
              <Input className={style.input} placeholder={"Enter Price"} name={"price"} value={values.price} onChange={handleChange} onBlur={handleBlur} />
              {errors.price && touched.price ? <p className={style.errorMessage}>*{errors.price}</p> : null}
            </div>
            <div className={style.inputDiv}>
              <label>Review:</label>
              <Input className={style.input} placeholder={"Enter Review"} name={"review"} value={values.review} onChange={handleChange} onBlur={handleBlur} />
              {errors.review && touched.review ? <p className={style.errorMessage}>*{errors.review}</p> : null}
            </div>
            <div className={style.btnDiv}>
              <Buttons type={"submit"} name={"Submit"} sx={{ width: "15vw", textTransform: "capitalize", fontSize: "1.2rem" }} />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default AddBooks;








