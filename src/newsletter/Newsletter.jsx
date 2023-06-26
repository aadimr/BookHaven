import Buttons from "../components/button/Button"; 
import Input from "../components/input/Input";
import style from "./Newsletter.module.css"

function Newsletter() {
  return (
    <div className={style.wrapper}>
      <div className={style.img}><img src="https://protonpiston.com/katalog/assets/images/background/bg1.jpg" alt='error' className={style.img}/></div>
      <div className={style.textOverlay}>
      <h1>Join Newsletter</h1>
      <p className={style.p}>Lorem started its journey with cast iron (CI) products in 1980. The initial main objective was to ensure pure water and affordable irrigation.</p>
      <div className={style.inputAndButton}>
      <Input className={style.input} placeholder={"Enter your email"}/>
      <Buttons name={"Subscribe"} sx={{borderRadius:"2rem", height:"3rem", textTransform:"capitalize", fontSize:"1.2rem"}}/>
      </div>
      </div>
    </div>
  )
}

export default Newsletter;
