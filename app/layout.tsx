'use client'

import { ToasterWrap, Navbar } from "./components"
import { SessionProvider } from "next-auth/react";

const metadata = {
  title: 'RealEstateApp',
  description: 'Real estate management app.',
}

export default function RootLayout({ children  } : {
    children: React.ReactNode 
  }) {
  
    return <>
            <html lang="en">
            <body>
            <div 
             className="">
             <SessionProvider>
             <ToasterWrap/> 
                {children}   
            </SessionProvider>
            </div>       
            </body>
            </html>
          </>

  }