'use client'

import { AddProperty, Button, Modal, PropertyCard } from "@/app/components";
import { useCurrentUser, useProperties, useToggle } from "@/app/hooks";
import { FaPlus } from "react-icons/fa";
import { BsHouseAdd } from "react-icons/bs";
import { Properties } from "@prisma/client";
import Loading from "./loading";
import { Listing } from "@/types/interfaces";

const page = () => {

    const [ modalCheck, handleModalCheck, setModalCheck ] = useToggle(false)
    const { data: user } = useCurrentUser()
    const { data: properties, isLoading}  = useProperties()

    const userProperties: Listing[] = properties?.filter( (property: Listing) =>(property?.userId === user?.id))

    let currentUserProperties

    for(let i = 0; i < userProperties.length; i++){

        currentUserProperties = userProperties[i]

        return currentUserProperties
    }
   
    console.log(currentUserProperties);

    if ( isLoading ) return <Loading/>
    

    return <>
            <div className="space-y-4">
            <div className="flex justify-between">
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
            </div>
        </>
};

export default page;
