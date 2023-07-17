'use client'

import { ClickEvent, Listing } from "@/types/interfaces";
import { useCallback } from "react";
import { IconType } from "react-icons";

type CategortItemsProps = {
     
     icon: IconType
     name: string
     setPropertyInfo:  React.Dispatch<React.SetStateAction<Listing>>
     propertyInfo: Listing
     selected?: boolean
     
}

const CategoryItem: React.FC<CategortItemsProps> = ({selected, icon: Icon,  name, propertyInfo, setPropertyInfo }) => {

       
  const categorySelect = useCallback(() => {

       setPropertyInfo((prevInfo => ({...prevInfo, category: name})))

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