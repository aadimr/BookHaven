import Input from "../../components/input/Input";
import style from "./SearchPanel.module.css"
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { filterBySearchPanel } from "../../store/BooksSlice";
import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react";

function SearchPanel() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    let placeholder = "Search book by author or publisher"

    if(windowWidth <= 600){
        placeholder = "Search book"
    }

    function handleChange(e) {
        const val = e.target.value
        if (val.trim() !== "") {
            navigate("/categories")
        }
        dispatch(filterBySearchPanel(val))
    }

    return (
        <div className={style.inputDiv}>
            <Input className={style.input} placeholder={placeholder} onChange={handleChange} />
            <SearchIcon className={style.searchLogo} />
        </div>
    )
}

export default SearchPanel;
