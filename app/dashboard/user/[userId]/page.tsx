'use client'

import { Avatar, EditUser, Modal } from "@/app/components";
import { useCurrentUser, useEditUser, useProperties, useToggle } from "@/app/hooks";
import { Listing } from "@/types/interfaces";
import React from "react";
import { FaEdit } from "react-icons/fa";
import Loading from "../../properties/loading";

const UserDetails = () => {

        const { data: user, isLoading } = useCurrentUser()
        const { editUser, handleEditUser, setEditUser } = useEditUser()
        const { data: properties } = useProperties()

        const userProperties: Listing[] = properties?.filter( 
        (property: Listing) =>(property?.userId === user?.id)
        )

        if ( isLoading ) return <Loading/>

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
               <EditUser setEditUser={setEditUser}/>
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
         <div>
           { userProperties?.map((item: Listing) => (<h1>{item?.title}</h1>))}
         </div>
        </div>
        </div>
};

export default UserDetails;
