'use client'

import { useGeneralContext } from "@/app/context/AppContext"
import { ButtonProps } from "@/types/interfaces"
import { FaIcons } from "react-icons/fa"

const Button: React.FC<ButtonProps> = (props) => {

  
  const { height } = useGeneralContext()

 

    const {

           text = "Button", 
           textColor, 
           bgColor, 
           clickEvent, 
           borderColor, 
           icon: Icon = FaIcons, 
           children,
           modifier,
           tip,
           isActive,
           disabled
           
          
          } = props

  return (
    <>
    
    <button type="button" disabled={disabled} onClick={clickEvent}
    
    className={`
        p-4
        flex
        items-center
        justify-center
        gap-2
        rounded-full
        btn-sm
        text-[12px]
        lg: text-md
        ${ height > 800 ? "md:btn-md" : "btn-sm"}
        
        ${isActive}
        ${modifier}
        ${borderColor} 
        ${textColor}
        ${bgColor}
     
 
    `}

     data-tip={tip}
    
          ><Icon className="text-lg"/>
          
            {text}
            {children}
        
        </button>

    </>
  )
}


export default Button;