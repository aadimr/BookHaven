import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';


export const bookCategory = ["History", "Horror - Thriller", "Love Stories", "Science Fiction", "Business"]

export const extraBookCategory = ["Biography", "Astrology", "Digital Marketing", "Software Development", "Ecommerce"]

export const siteMap = [{to:"/",name:"Home"},{to:"/categories",name:"Categories"},{to:"/about",name:"About"},{to:"/blog",name:"Blog"},{to:"/contect",name:"Contect"}] 

export const icons = [
    { iconeName: <FaFacebook />, href: "https://www.facebook.com" },
    { iconeName: <FaInstagram />, href: "https://www.instagram.com" },
    { iconeName: <FaLinkedinIn />, href: "https://www.linkedin.com" },
    { iconeName: <AiFillYoutube />, href: "https://www.youtube.com" }
]