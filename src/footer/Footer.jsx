import style from "./Footer.module.css"
import { bookCategory, extraBookCategory, siteMap, icons } from "./footerData";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.mainContainer}>
          <ul className={style.logoAndText}>
            <li><img src={process.env.PUBLIC_URL + '/bookHavenLogo.png'} className={style.img} alt="error"/></li>
            <li className={style.text}>Get the breathing space now, and we’ll extend your term at the other end year for go.</li>
            <ul className={style.icons}>
              {icons.map((ele, index) => (
                <li key={index}><a href={ele.href} target="_blank" rel="noopener noreferrer">{ele.iconeName}</a></li>
              ))}
            </ul>
          </ul>
          <ul className={style.bookCategoryAndSiteMap}>
            <h3>Book Category</h3>
            {bookCategory.map((ele, index) => (
              <li key={index}>{ele}</li>
            ))}
          </ul>
          <ul className={style.bookCategoryAndSiteMap}>
            {extraBookCategory.map((ele, index) => (
              <li key={index} style={index === 0 ? { marginTop: "2.5rem" } : null}>{ele}</li>
            ))}
          </ul>
          <ul className={style.bookCategoryAndSiteMap}>
            <h3>Site Map</h3>
            {siteMap.map((ele, index) => (
              <Link key={index} to={ele.to} className={style.link}><li>{ele.name}</li></Link>
            ))}
          </ul>
        </div>
      </div>
      <div className={style.copyRight}>
        <p>Copyright ©2023 All rights reserved | This website is made with  by Aditya Shaw</p>
      </div>
    </>
  )
}

export default Footer;
