import style from "./Input.module.css"

function Input({className,placeholder,type,refs,onChange,name,value,onBlur}) {
  return (
    <div>
      <input className={className} placeholder={placeholder} type={type} ref={refs} onChange={onChange} name={name} value={value} onBlur={onBlur}/>
    </div>
  )
}

export default Input;
