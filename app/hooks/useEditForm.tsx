'use client'


import { Listing } from "@/types/interfaces";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Toast } from "../components";
import useCurrentUser from "./useCurrentUser";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import useProperties from "./useProperties";
import { usePathname, useRouter } from "next/navigation";


const useEditForm = ( propertyId?: string ) => {

    const initialListingInfo: Listing = {
        category: '',
        location: undefined,
        squareFt: '',
        roomCount: 1,
        bathroomCount: 1,
        imageSrc: '',
        price: '',
        title: '',
        description: '',
        id: propertyId,
        locationValue: ""
      }


        const router = useRouter()
        const pathname = usePathname()
        const [ editPropertyInfo, setEditPropertyInfo ] = useState<Listing>(initialListingInfo)
        const { mutate: mutatedProperties} = useProperties()
        const handleEditProperty = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, type, name, checked} = e.target
        const newValue = type === "checkbox" ? checked : value;
        setEditPropertyInfo((prevData) => ({
        ...prevData,
        [name]: newValue,
        }))
    }

    const handleEdit = async () => {

        try {
          
        await axios.patch(`/api/properties/edit`, editPropertyInfo )
        .then(() =>  toast.custom(() => (<Toast
          text='Property edited successfully'
          modifier="bg-green-500 text-white"
          icon={FaCheckCircle}
          />)))
            mutatedProperties()
    
            } catch (error: any) {
    
              toast.custom(() => (<Toast
                text={error.message}
                modifier="bg-orange-500 text-white"
                icon={FaExclamationTriangle}
            />))
          
    } 
    
       }

    const handleDelete = () => {
      axios.delete(`/api/properties/${propertyId}`)
      .then(() =>  toast.custom(() => (<Toast
        text='Delete successful'
        modifier="bg-red-500 text-white"
        icon={FaCheckCircle}
    />)))
    .catch((error) => {
      toast.custom(() => (<Toast
        text={error.message}
        modifier="bg-red-500 text-white"
        icon={FaExclamationTriangle}
    />))
    })
    mutatedProperties()
    
    if(pathname !== '/dashboard/properties')
      router.back()
    }   
  

  return { handleEditProperty, editPropertyInfo, setEditPropertyInfo, handleEdit, handleDelete}
};

export default useEditForm;
