import style from "./LogIn.module.css"
import Input from "../../components/input/Input";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Buttons from "../../components/button/Button";
import { useFormik } from "formik";
// import { userSignUpSchema } from "../../schemas/userSchema";
import { useDispatch } from 'react-redux';
import { createBook } from "../../store/BooksSlice";
import { Link } from "react-router-dom";
// import { userLogInSchema } from "../../schemas/userLoginSchema";

const initialValues = {
    user_Name: "",
    email: "",
    password: "",
    confirm_Password: "",
}

function LogIn() {

    const dispatch = useDispatch()

    const { values, handleBlur, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        // validationSchema: userLogInSchema,
        onSubmit: (values, action) => {
            dispatch(createBook(values));
            action.resetForm();
        }
    })


    return (
        <div className={style.wrapper}>
            <Card sx={{
                width: "50vw",
                minHeight: "90vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,.2)",
                boxShadow: "0 4px 30px #0000001a"
            }}>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className={style.heading}>
                            <p>Log In</p>
                            <p className={style.aboutAccess}>Enter Login details to get access</p>
                        </div>
                        {/* <div className={style.inputDiv}>
                            <label>Full Name:</label>
                            <Input className={style.input} placeholder={"Enter your name"} name={"user_Name"} value={values.user_Name} onChange={handleChange} onBlur={handleBlur} />
                            {errors.user_Name && touched.user_Name ? <p className={style.errorMessage}>*{errors.user_Name}</p> : null}
                        </div> */}
                        <div className={style.inputDiv}>
                            <label>Email Address:</label>
                            <Input className={style.input} placeholder={"Enter your email"} name={"email"} value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            {errors.email && touched.email ? <p className={style.errorMessage}>*{errors.email}</p> : null}
                        </div>
                        <div className={style.inputDiv}>
                            <label>Password:</label>
                            <Input className={style.input} placeholder={"Enter your password"} name={"password"} value={values.password} onChange={handleChange} onBlur={handleBlur} />
                            {errors.password && touched.password ? <p className={style.errorMessage}>*{errors.password}</p> : null}
                        </div>
                        {/* <div className={style.inputDiv}>
                            <label>Confirm Password:</label>
                            <Input className={style.input} placeholder={"Enter your confirm password"} name={"confirm_Password"} value={values.confirm_Password} onChange={handleChange} onBlur={handleBlur} />
                            {errors.confirm_Password && touched.confirm_Password ? <p className={style.errorMessage}>*{errors.confirm_Password}</p> : null}
                        </div> */}
                        <div className={style.btnDiv}>
                            <Buttons type={"submit"} name={"Submit"} sx={{
                                width: "15vw",
                                textTransform: "capitalize",
                                fontSize: "1.2rem",
                                backgroundColor: "#3E8ED0",
                                color: "black",
                                '&:hover': {
                                    backgroundColor: "#C8E2F7",
                                },
                            }} />
                            <p>Don’t have an account?<Link to="/singUp" className={style.link}><span className={style.loginText}>SignUp</span></Link> here</p>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default LogIn;
