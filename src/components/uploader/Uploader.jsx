// import Input from "../input/Input"
// import style from "./Uploader.module.css"
// import { useState, useRef } from "react";
// import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

// function Uploader({ onChange, onBlur, image }) {

//     const inputRef = useRef(null)

//     function handleClick(){
//         inputRef.current.click();
//     }

//     return (
//         <div>
//             <div onClick={handleClick} className={style.mainContainer}>
//                 {image ? <img src={URL.createObjectURL(image)} alt="error" className={style.image}/>:<CloudDownloadIcon sx={{fontSize:"5rem",color:"#00acee"}}/>}
//                 <Input type={"file"} refs={inputRef} style={{ display: "none" }} onChange={onChange} onBlur={onBlur}/>
//             </div>
//         </div>
//     )
// }

// export default Uploader;
