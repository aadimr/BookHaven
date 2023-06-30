import Input from "../../components/input/Input";
import style from "./SearchPanel.module.css"
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { filterBySearchPanel } from "../../store/BooksSlice";
import { useNavigate } from "react-router-dom"

function SearchPanel() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleChange(e) {
        const val = e.target.value
        if (val.trim() !== "") {
            navigate("/categories")
        }
        dispatch(filterBySearchPanel(val))
    }

    return (
        <div className={style.inputDiv}>
            <Input className={style.input} placeholder={"Search book by author or publisher"} onChange={handleChange} />
            <SearchIcon className={style.searchLogo} />
        </div>
    )
}

export default SearchPanel;
