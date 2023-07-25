'use client'

import { Listing } from "@/types/interfaces";
import { useState } from "react";
import { useGeneralContext } from "../context/AppContext";
import { toast } from "react-hot-toast";
import { Toast } from "../components";
import { AiFillCheckCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaExclamationTriangle } from "react-icons/fa";
import useCurrentUser from "./useCurrentUser";
import useProperties from "./useProperties";


enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}


const useAddProperty = () => {

    const initialListingInfo: Listing = {
      category: '',
      location: undefined,
      squareFt: '',
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: [],
      price: '',
      title: '',
      description: '',
      id: "",
      locationValue: ""
    }
    
    const router = useRouter()
    const [ propertyInfo, setPropertyInfo ] = useState<Listing>(initialListingInfo)
    const [ step, setStep ] = useState(STEPS.CATEGORY);
    const { data: user } = useCurrentUser()
    const { mutate: mutatedProperties} = useProperties()
    const { setAddModalToggle } = useGeneralContext()
    const handleAddProperty = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, type, name, checked} = e.target
      const newValue = type === "checkbox" ? checked : value;
      setPropertyInfo((prevData) => ({
      ...prevData,
      [name]: newValue,
      }))
  }

  const onBack = () => {
    if( step === STEPS.CATEGORY){
      setStep(0)
    } else {
      setStep((prevValue) => prevValue - 1);
    }
  }

  const onNext = () => {
      if( step === STEPS.PRICE){
        setStep(5)
      } else {
      setStep((prevValue) => prevValue + 1);
    }
  }


  const onSendData = () => {

    if (!user) return  <Toast text="Sign in to add Property" modifier="bg-orange-500 text-white" icon={FaExclamationTriangle}/>

     axios.post('/api/properties', propertyInfo)
     .then(() => {
       toast.custom(() => (<Toast text="Property added" modifier="bg-green-500 text-white" icon={AiFillCheckCircle}/>))

     })
     .catch(error => toast.custom(() => (
     <Toast text={error.message} modifier="bg-orange-500 text-white" icon={FaExclamationTriangle}/>
     )))

     mutatedProperties()

  }

  return {propertyInfo, setPropertyInfo, handleAddProperty, onBack,
          onNext, STEPS, step, onSendData, setStep, initialListingInfo}
};

export default useAddProperty;