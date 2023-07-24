import { Listing } from "@/types/interfaces";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Toast } from "../components";
import useCurrentUser from "./useCurrentUser";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";


const useEditForm = ( propertyId: string ) => {

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



      const [ editPropertyInfo, setEditPropertyInfo ] = useState<Listing>(initialListingInfo)
      const { data: mutatedCurrentUser} = useCurrentUser()
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
          .catch( error => toast.custom(<Toast
            text={error.message}
            modifier="bg-orange-500 text-white"
            icon={FaExclamationTriangle}
            />))
    
              mutatedCurrentUser()
    
              toast.custom((t) => (<Toast
                text='Profile edited successfully'
                modifier="bg-green-500 text-white"
                icon={FaCheckCircle}
                />))
    
            } catch (error: any) {
    
              toast.custom((t) => (<Toast
                text={error.message}
                modifier="bg-orange-500 text-white"
                icon={FaExclamationTriangle}
            />))
          
    } 
    
       }

    const handleDelete = () => {
      
    }   
  

  return { handleEditProperty, editPropertyInfo, setEditPropertyInfo, handleEdit}
};

export default useEditForm;
