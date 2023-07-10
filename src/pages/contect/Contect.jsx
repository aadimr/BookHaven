import style from "./Contect.module.css"
import Input from ".././../components/input/Input"
import Buttons from ".././../components/button/Button"
import { useFormik } from "formik";
import { getInTouchSchema } from "../../schemas/getInTouchSchema";
import { checkEmailExists } from "../../schemas/getInTouchSchema";
import { getInTouch } from "../../store/GetInTouchSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

function Contect() {

  const getInTouchNotify = () => (toast.success('Sent successfully', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
}))

  const dispatch = useDispatch()


  const { values, handleBlur, errors, handleChange, handleSubmit, touched, setFieldError } = useFormik({
    initialValues: initialValues,
    validationSchema: getInTouchSchema,
    onSubmit: async (values, action) => {
      try {
          const { email } = values;
          const emailExists = await checkEmailExists(email);
          if (emailExists) {
              setFieldError('email', 'Email already exists');
          } else {
              dispatch(getInTouch(values));
              getInTouchNotify()
              action.resetForm();
          }
      } catch (error) {
          console.error(error);
      }
  }
  })


  return (
    <div className={style.wrapper}>
          <ToastContainer />
      <form onSubmit={handleSubmit} className={style.mainDiv}>
        <p className={style.heading}>Get in touch</p>
        <div>
        <textarea className={style.textarea} placeholder={"Enter Message"} name={"message"} value={values.message} onChange={handleChange} onBlur={handleBlur} />
        {errors.message && touched.message ? <p className={style.errorMessage}>*{errors.message}</p> : null}
        </div>
        <div className={style.inputOfNameAndEmail}>
          <div>
            <Input className={style.inputOfASeparateDiv} placeholder={"Enter your name"} name={"name"} value={values.name} onChange={handleChange} onBlur={handleBlur} />
            {errors.name && touched.name ? <p className={style.errorMessage}>*{errors.name}</p> : null}
          </div>
          <div>
            <Input className={style.inputOfASeparateDiv} placeholder={"Email"} name={"email"} value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {errors.email && touched.email ? <p className={style.errorMessage}>*{errors.email}</p> : null}
          </div>
        </div>
        <div>
          <Input className={style.input} placeholder={"Enter Subject"} name={"subject"} value={values.subject} onChange={handleChange} onBlur={handleBlur} />
          {errors.subject && touched.subject ? <p className={style.errorMessage}>*{errors.subject}</p> : null}
        </div>
        <Buttons sx={{
          width: "8vw",
          height: "8vh",
          textTransform: "capitalize",
          fontSize: "1.2rem",
          backgroundColor: "#3E8ED0",
          color: "black",
          '&:hover': {
            backgroundColor: "#C8E2F7",
          },
        }} name={"send"} type={"submit"}/>
      </form>
    </div>
  )
}

export default Contect;
