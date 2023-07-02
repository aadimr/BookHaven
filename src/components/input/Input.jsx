
function Input({className,placeholder,type,refs,onChange,name,value,onBlur,checked,style}) {
  return (
    <div>
      <input className={className} style={style} checked={checked} placeholder={placeholder} type={type} ref={refs} onChange={onChange} name={name} value={value} onBlur={onBlur}/>
    </div>
  )
}

export default Input;
