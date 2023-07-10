'use client'

import {useContext, createContext, useState } from "react";
import { ContextData, IProps } from "@/types/interfaces";
import { useToggle, useHeight, useWidth, useCurrentUser } from "../hooks";

const GeneralContext = createContext<ContextData>({   

   height: 0,
   width: 0

}) 

export const GeneralAppContext = ({ children }: IProps) => {
 
    const { data: user } = useCurrentUser()
    const [ height ] = useHeight()
    const [ width ] = useWidth()
    const [ addModalToggle, setAddModalToggle ] = useToggle(false)


  return <GeneralContext.Provider value={{ height,  width, addModalToggle, setAddModalToggle, user }}>

            {children}

        </GeneralContext.Provider>
}

export const useGeneralContext = () => useContext(GeneralContext)