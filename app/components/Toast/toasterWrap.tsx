'use client'

import { useWidth } from "@/app/hooks";
import React from "react";
import { Toaster, ToasterProps } from "react-hot-toast";


const ToasterWrap: React.FC<ToasterProps> = ({ position }) => {
const [ width ] = useWidth()

  return <Toaster
          position={ width <= 700 ? "top-center" : "bottom-left"}
        />
};

export default ToasterWrap;