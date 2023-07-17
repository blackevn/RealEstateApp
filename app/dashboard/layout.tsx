'use client'

import '../../styles/globals.css'
import { SideNav } from "../components"
import { useCurrentUser } from '../hooks'

export default function DashboardLayout({ children  } : {
    children: React.ReactNode 
  }) {

    const { data: user } = useCurrentUser()
    
    return <html>
            
          <body>
          <SideNav user={user}>
           <div className='grid'>
               {children}   
           </div>
          </SideNav>
           </body>
          </html>
  
  } 