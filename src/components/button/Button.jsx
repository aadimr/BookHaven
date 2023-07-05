import Button from "@mui/material/Button"

function Buttons({name,sx,type,onClick}) {
  return (
    <div>
      <Button variant="contained" sx={sx} type={type} onClick={onClick}>{name}</Button>
    </div>
  )
}

export default Buttons;
