'use client'

import React from "react";
import { Avatar } from "@/types/interfaces";
import Link from "next/link";

const Avatar:  React.FC<Avatar> = ({children, src = '/vercel.svg', userId, width = 'w-10'}) => {

  return  <Link href={`/home/profile/${userId}`}>
          <div className={`avatar ${width}`}>
           <img className="bg-white w-14 h-14 rounded-full" src={src} alt="thumbnail"/>
          </div>
          </Link>
};

export default Avatar;