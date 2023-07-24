'use client'

import { ClickEvent, Listing } from "@/types/interfaces";
import { useCallback } from "react";
import { IconType } from "react-icons";
import { EnumType } from "typescript";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

type CategortItemsProps = {
     
     icon: IconType
     name: string
     setPropertyInfo:  React.Dispatch<React.SetStateAction<Listing>>
     propertyInfo: Listing
     selected?: boolean
     setStep: React.Dispatch<React.SetStateAction<STEPS>>
     
}

const CategoryItem: React.FC<CategortItemsProps> = ({setStep, selected, icon: Icon,  name, propertyInfo, setPropertyInfo }) => {

       
  const categorySelect = useCallback(() => {

       setPropertyInfo((prevInfo => ({...prevInfo, category: name})))
       setStep((prevValue) => prevValue + 1);
  }, [propertyInfo, setPropertyInfo, name])

  return <div
          onClick={categorySelect}
          className={`min-w-[200px] rounded-lg hover:bg-blue-600 p-4 cursor-pointer grid place-items-center
          ${selected && 'bg-gray-3'}`}>
          <span className="flex gap-4 items-center">
            <Icon className="text-xl"/><h1>{name}</h1>
          </span>
        </div>
};

export default CategoryItem;