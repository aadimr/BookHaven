import { Link } from "react-router-dom";
import style from "./About.module.css"
import { icons } from "./linkData";

function About() {
  return (
    <div className={style.wrapper}>
      <img src={process.env.PUBLIC_URL + '/Aditya Shaw.jpeg'} alt="error" className={style.img} />
      <div className={style.linkWrapper}>
        {
          icons.map((ele, index) => (
            <Link key={index} to={ele.to} target={index !== 2 ? "_blank" : null} rel="noopener" className={style.link}>{ele.iconeName}</Link>
          ))
        }
      </div>
      <div className={style.aboutMe}>
        <h1>About me</h1>
        <p className={style.description}>Hello, I am Aditya Shaw. I am a highly motivated and dedicated front-end developer trainee with a passion for creating visually appealing and user-friendly websites. Proficient in HTML, CSS, JavaScript, Redux-toolkit and also front-end JavaScript library like React. Seeking opportunities to gain hands-on experience and collaborate with experienced developers to enhance my skills and contribute to innovative web projects. Committed to staying updated with the latest industry trends and best practices. Decent communication and teamwork skills, with a drive to learn from and contribute to a dynamic development team. Ready to take on challenges, grow as a developer, and make a positive impact in the world of web development.</p>
      </div>
    </div>
  )
}

export default About;
