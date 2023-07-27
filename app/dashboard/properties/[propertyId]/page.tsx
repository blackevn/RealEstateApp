'use client'

import { Button, EditForm, Modal } from "@/app/components";
import { useCurrentUser, useFavorite, useProperty, useToggle } from "@/app/hooks";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { FaArrowAltCircleLeft, FaBook, FaEdit, FaTape } from "react-icons/fa";
import { MdBedroomParent } from "react-icons/md";
import { TbBathFilled } from "react-icons/tb";

const page = () => {

  const pathname = usePathname();
  const propertyId = pathname?.toString().replace(/^\/dashboard\/properties\//, "").toString();
  const { data: property } = useProperty(propertyId)
  const { data: currentUser } = useCurrentUser()
  const router = useRouter()
  const [ editModal, handleEditModal, setEditModal ] = useToggle(false)
  const { hasFavorited, toggleFavorite, favoriteToggle  } = useFavorite({
    propertyId,
  currentUser
});

  console.log(property);

  return <>
        <div className="space-y-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
          <Button
          icon={FaArrowAltCircleLeft}
          text="Back"
          clickEvent={() => {
            router.back()
          }}
          />
          <h1 className="text-2xl font-bold">{property?.title}</h1>
          </div>
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
                    <EditForm propertyId={propertyId}/>
                </Modal>
        </div>
        <div className="lg:flex lg:items-center lg:gap-4">
        <Image
          src={property?.imageSrc.toString()}
          alt="Listing image"
          className='rounded-lg w-full lg:w-1/2 object-cover'
          />
          <div className="flex flex-col justify-between w-full lg:w-1/2 h-full space-y-4">
            <div className="space-y-4">
            <h1 className="p-6 max-h-[300px] overflow-y-scroll">{property?.description}</h1>
            <div className="grid grid-cols-2 gap-4 place-items-start lg:w-1/2">
            <div className="grid place-items-center text-2xl"><TbBathFilled /> {property?.bathroomCount} bathrooms</div>
            <div className="grid place-items-center text-2xl"><MdBedroomParent/> {property?.roomCount} rooms</div>
            <div className="grid place-items-center text-2xl"><FaTape/> {property?.squareFt} sq-ft</div>
            </div>
            </div>
            <div className="flex items-center justify-between gap-4">

            <Button
              text="Contact Agent"
              modifier="btn w-full"
              icon={BsFillPhoneVibrateFill}
              />
            <Button
              icon={hasFavorited || favoriteToggle ? AiFillHeart : AiOutlineHeart}
              text="Favorite"
              modifier=" btn"
              clickEvent={ toggleFavorite }
              />
            <Button
              text="Schedule tour"
              modifier="btn w-full"
              icon={FaBook}
              />
              </div>
          </div>
        </div>
        </div>
        </>;
};

export default page;
