'use client'

import { useEffect } from 'react';
import '../../styles/globals.css'
import { SideNav, ToasterWrap } from "../components"
import { useCurrentUser } from '../hooks'
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children  } : {
    children: React.ReactNode 
  }) {

    const { data: user } = useCurrentUser()
    
    const router = useRouter()

    useEffect(() => {
      if ( !user ) return router.push('/')
    }, [!user])
    
    return <html>
            
          <body>
          <ToasterWrap/> 
          <SideNav user={user}>
           <div className='grid'>
               {children}   
           </div>
          </SideNav>
           </body>
          </html>
  
  } 