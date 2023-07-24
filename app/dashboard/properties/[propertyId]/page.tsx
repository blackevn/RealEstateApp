'use client'

import { Button, Modal } from "@/app/components";
import { useProperty, useToggle } from "@/app/hooks";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBook, FaEdit } from "react-icons/fa";
import { TbBathFilled } from "react-icons/tb";

const page = () => {

  const pathname = usePathname();
  const propertyId = pathname?.toString().replace(/^\/dashboard\/properties\//, "");
  const { data: property } = useProperty(propertyId as string)
  const [ singleProperty, setSingleProperty ] = useState()
  const [ editModal, handleEditModal, setEditModal ] = useToggle(false)

  console.log(property);
  

  return <>
        <div className="flex items-center justify-center w-full">
          <h1 className="text-2xl font-bold">{property?.title}</h1>
          <Modal
                label="Edit"
                modifier="btn px-4 rounded-full text-[0.75rem]"
                icon={FaEdit}
                modal={editModal ? 'modal-2' : ''}
                toggle={editModal}
                onClick={() => handleEditModal(true)}
                checked={editModal}
                modalOff={() => setEditModal(false)}
                >
                    
                </Modal>
        </div>
        <div className="lg:flex items-center justify-between">
        <Image
          src={property?.imageSrc.toString()}
          alt="Listing image"
          className='rounded-lg w-full lg:w-1/2 object-cover'
          />
          <div className="space-x-8 flex flex-col justify-between">
            <h1>{property.description}</h1>
            <div className="flex items-center justify-between">
            <div><TbBathFilled/> {property.bathroomCount}</div>
            <div><TbBathFilled/> {property.bathroomCount}</div>
            <div><TbBathFilled/> {property.bathroomCount}</div>
            </div>
            <Button
              text="Book"
              modifier="btn w-full"
              icon={FaBook}
            />
          </div>
        </div>
        </>;
};

export default page;
