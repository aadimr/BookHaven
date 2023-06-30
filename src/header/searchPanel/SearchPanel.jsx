import Input from "../../components/input/Input";
import style from "./SearchPanel.module.css"
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { filterBySearchPanel } from "../../store/BooksSlice";

function SearchPanel() {

    const dispatch = useDispatch()

    function handleChange(e) {
        const val = e.target.value
        // console.log(val)
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
