import Buttons from "../components/button/Button";
import Input from "../components/input/Input";
import style from "./Newsletter.module.css"
import { useState } from "react";

function Newsletter() {

  const [val, setVal] = useState("")

  function handleOnChange(e) {
    setVal(e.target.value)
  }

  function handleOnClick() {
    if (val.trim().length === 0){
        
    }
      setVal("")
  }

  return (
    <div className={style.wrapper}>
      <div className={style.img}><img src="https://protonpiston.com/katalog/assets/images/background/bg1.jpg" alt='error' className={style.img} /></div>
      <div className={style.textOverlay}>
        <h1>Join Newsletter</h1>
        <p className={style.p}>Be the first to know about new releases, exclusive discounts, and more.</p>
        <div className={style.inputAndButton}>
          <Input className={style.input} placeholder={"Enter your email"} onChange={handleOnChange} value={val}/>
          <Buttons onClick={handleOnClick} type={"submit"} name={"Subscribe"} sx={{ borderRadius: "2rem", height: "3rem", textTransform: "capitalize", fontSize: "1.2rem" }} />
        </div>
      </div>
    </div>
  )
}

export default Newsletter;
