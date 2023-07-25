'use client'

import { AddProperty, Button, Modal, PropertyCard } from "@/app/components";
import { useCurrentUser, useProperties, useToggle } from "@/app/hooks";
import { FaPlus } from "react-icons/fa";
import { BsHouseAdd } from "react-icons/bs";
import { SetStateAction, Suspense, useEffect, useState } from "react";
import { Properties } from "@prisma/client";
import Loading from "./loading";

const page = () => {

    const [ modalCheck, handleModalCheck, setModalCheck ] = useToggle(false)
    const { data: user } = useCurrentUser()
    const { data: properties}  = useProperties()

    return <>
            <div className=" flex justify-between">
                <h1 className="text-2xl font-bold">All properties</h1>     
                <div>
                <Modal
                label="Add your property"
                modifier="btn px-4 rounded-full text-[0.75rem]"
                icon={BsHouseAdd}
                modal={modalCheck ? 'modal-1' : ''}
                toggle={modalCheck}
                onClick={() => handleModalCheck(true)}
                checked={modalCheck}
                modalOff={() => setModalCheck(false)}
                >
                    <AddProperty 
                    handleModalCheck={handleModalCheck} 
                    modalCheck={modalCheck} 
                    setModalCheck={setModalCheck} />
                </Modal>
                </div>       
            </div>
             <div className="listGrid">
                {properties?.map((property: Properties) => (<PropertyCard 
                                                             key={property?.id}
                                                             property={property} 
                                                             currentUser={user}      
                                                             />))}
            </div> 
        </>
};

export default page;
