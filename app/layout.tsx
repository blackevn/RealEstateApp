'use client'

import { ToasterWrap, Navbar } from "./components"
import { SessionProvider } from "next-auth/react";
import { GeneralAppContext } from "./context/AppContext";

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
              <GeneralAppContext>
              <ToasterWrap/> 
            <div 
             className="">
             <SessionProvider>
                {children}   
            </SessionProvider>
            </div>       
            </GeneralAppContext>
            </body>
            </html>
          </>

  }