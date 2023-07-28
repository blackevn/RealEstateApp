'use client'

import { Avatar, Modal } from "@/app/components";
import { useCurrentUser, useEditUser, useToggle } from "@/app/hooks";
import React from "react";
import { FaEdit } from "react-icons/fa";

const UserDetails = () => {

        const { data: user } = useCurrentUser()
        const [ editUser, handleEditUser, setEditUser ] = useToggle()
        const { setEditData, editData, handleUserEditChange, sendEditData } = useEditUser()

  return <div className="space-y-4"> 
        <div className="flex items-center w-full justify-between">
        <h1 className="text-2xl">{user?.name}</h1>
        <Modal
        label="Edit profile"
        modifier="btn px-4 rounded-full text-[0.75rem]"
        modal={editUser ? 'modal-3' : ''}
        toggle={editUser}
        onClick={() => handleEditUser(true)}
        checked={editUser}
        modalOff={() => setEditUser(false)}
        icon={FaEdit} 
        >
               <h1>Edit user profile</h1> 
        </Modal>
        </div>
        <div className="lg:grid grid-cols-12 gap-4">
                <div className="grid rounded-xl col-span-5 h-full bg-gray-2 p-4">
                        <h1>Profile</h1>
                        <div className="grid place-items-center gap-4">
                        <Avatar width="w-24 h-24"/>
                        <h1>{user?.email}</h1>
                        </div>

                </div>
                <div className="h-full rounded-xl grid col-span-7 bg-gray-2 p-4">
                        <h1>Favorites</h1>
                </div>
        </div>
        <div className='w-full rounded-xl '>
         <h1>Properties</h1>
        </div>
        </div>
};

export default UserDetails;
