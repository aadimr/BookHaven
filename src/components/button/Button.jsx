import Button from "@mui/material/Button"

function Buttons({name,sx,type}) {
  return (
    <div>
      <Button variant="contained" sx={sx} type={type}>{name}</Button>
    </div>
  )
}

export default Buttons;
