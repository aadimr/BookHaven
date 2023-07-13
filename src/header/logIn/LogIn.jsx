import style from "./LogIn.module.css"
import Input from "../../components/input/Input";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Buttons from "../../components/button/Button";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { userLogInSchema } from "../../schemas/userLoginSchema";
import { checkEmailExistsForLogIn } from "../../schemas/userLoginSchema";

const initialValues = {
    email: "",
    password: "",
}

function LogIn() {

    const navigate = useNavigate()

    const { values, handleBlur, errors, handleChange, handleSubmit, touched, setFieldError } = useFormik({
        initialValues: initialValues,
        validationSchema: userLogInSchema,
        validateOnChange: true,
        onSubmit: async (values, action) => {
            try {
                const { email, password } = values;
                const emailExists = await checkEmailExistsForLogIn(email, password);
                if (!emailExists) {
                    setFieldError();
                    setFieldError("password", "Email or Password is wrong")
                } else {
                    action.resetForm();
                    navigate("/");
                }
            } catch (error) {
                console.error(error);
            }
        }
    })


    return (
        <div className={style.wrapper}>
            <Card sx={{
                width: "750px",
                minHeight: "90vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,.2)",
                boxShadow: "0 4px 30px #0000001a",
                '@media screen and (max-width: 900px)': {
                    width: "650px",
                  },
                  '@media screen and (max-width: 750px)': {
                    width: "500px",
                  },
                  '@media screen and (max-width: 600px)': {
                    width: "400px",
                  },
                  '@media screen and (max-width: 450px)': {
                    width: "350px",
                  },
            }}>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className={style.heading}>
                            <p>Log In</p>
                            <p className={style.aboutAccess}>Enter Login details to get access</p>
                        </div>
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
                            <p className={style.p}>Don’t have an account?<Link to="/singUp" className={style.link}><span className={style.loginText}>SignUp</span></Link> here</p>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default LogIn;
