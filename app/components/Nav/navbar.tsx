'use client'

import { signOut } from "next-auth/react";
import Button from "../Elements/Button";
import { BiLogIn } from 'react-icons/bi'
const Navbar = () => {

    return <div className="">
                <nav className="flex justify-between items-center p-4">
                <h1>RealEstate</h1>
                <Button
                icon={BiLogIn}
                clickEvent={signOut}
                modifier="btn"
                
                />
            
            </nav>
            </div>
    

}

export default Navbar;
