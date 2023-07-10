'use client'

import '../../styles/globals.css'
import { SideNav } from "../components"
import { useCurrentUser } from '../hooks'

export default function RootLayout({ children  } : {
    children: React.ReactNode 
  }) {

    const { data: user } = useCurrentUser()
    
    return <div>
            
          <div>
          <SideNav user={user}>
           <div className='grid'>
               {children}   
           </div>
          </SideNav>
           </div>
          </div>
  
  } 