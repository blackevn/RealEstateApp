'use client'

import { useGeneralContext } from "@/app/context/AppContext"
import { InputProps } from "@/types/interfaces"


const Input: React.FC<InputProps> = (props) => {

  const { height } = useGeneralContext()

    const {type, 
           name, 
           value, 
           id, 
           onChange, 
           placeholder = "Input", 
           textColor = "text-gray-600", 
           modifier, 
           ref, 
           disabled, 
           hidden, 
           onFocus,
           icon: Icon,
           iconModifier, onClick, orientation } = props

  return (

    <>

    <div className={`form-control relative w-full ${orientation}`}>
        <input
        hidden={hidden}
        ref={ref}
        onFocus={onFocus}
        disabled={disabled} 
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className={`${modifier}`} 
        placeholder={placeholder} />

        <span className="absolute inset-y-0 right-4 inline-flex items-center">
          <Icon onClick={onClick} className={`${iconModifier}`} />
        </span>
      </div>

      
      
    </>

  )
}


export default Input;