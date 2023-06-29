
function Input({className,placeholder,type,refs,onChange,name,value,onBlur,checked}) {
  return (
    <div>
      <input className={className} checked={checked} placeholder={placeholder} type={type} ref={refs} onChange={onChange} name={name} value={value} onBlur={onBlur}/>
    </div>
  )
}

export default Input;
