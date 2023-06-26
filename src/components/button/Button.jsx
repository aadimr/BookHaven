import Button from "@mui/material/Button"
import style from "./Button.module.css"

function Buttons({name,sx,type}) {
  return (
    <div>
      <Button variant="contained" sx={sx} type={type}>{name}</Button>
    </div>
  )
}

export default Buttons;
