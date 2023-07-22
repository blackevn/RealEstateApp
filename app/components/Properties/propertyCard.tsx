'use client'

import { IUser  } from "@/types/interfaces";
import { Bookings, Properties} from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCountries, useToggle } from "../../hooks";
import React, { useCallback, useMemo } from "react";
import { format } from 'date-fns';
import Image from "next/image";
import { Button } from "../Elements";
import { FaHeart } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsCalendarPlusFill } from "react-icons/bs";
import { useFavorite } from "../../hooks";

type ListingProps = {
  property: Properties
  booking?: Bookings
  currentUser: IUser | null
  onAction?: (id: string) => void
  disabled?: boolean
  actionLabel?: string
  actionId?: string 
  
 
}

const PropertyCard: React.FC<ListingProps> = ({ 
                                          booking,
                                          property, 
                                          currentUser,
                                          onAction, disabled,
                                          actionId = '',
                                          actionLabel,
                                          }) => {

const propertyId = property?.id
const router = useRouter()
const { getByValue } = useCountries()
const location = getByValue(property?.locationValue)
const { hasFavorited, toggleFavorite, favoriteToggle  } = useFavorite({
    propertyId,
  currentUser
});


const handleCancel = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
  e.stopPropagation()
  if (disabled) return
  onAction?.(actionId)

}, [onAction, disabled, disabled])

 const price = useMemo(() => {
  if(booking) {
    return property?.price
  }

  return property?.price
 }, [booking, property?.price])

 const bookingDate = useMemo(() => {
  if (!booking) {
    return null;
  }

  const start = new Date(booking?.startDate);
  const end = new Date(booking?.endDate);

  return `${format(start, 'PP')} - ${format(end, 'PP')}`;
}, [booking]);

console.log(hasFavorited);


return <div 
        onClick={() => router.push(`/listings/${property?.id}`)} 
        className="col-span-1 cursor-pointer hover:bg-gray-2 rounded-2xl transition-all p-2 space-y-4"
        >
          <Image
          src={property?.imageSrc.toString()}
          alt="Listing image"
          className='rounded-lg max-h-[200px] w-full lg:max-h-[200px] lg:max-w-[300px] object-cover'
          />
          <div className="space-y-4">
          <div className="flex justify-between">
          <h1 className="rounded-full grid place-items-center px-2 py-0 text-[12px] font-thin bg-gray-3 italic">{bookingDate || property?.category}</h1>
          <Button
          icon={hasFavorited || favoriteToggle ? AiFillHeart : AiOutlineHeart}
          text=""
          modifier="text-lg"
          clickEvent={ toggleFavorite }
          />
          </div>
          <div>
          <h1 className="font-bold">{location?.region}, {location?.label}</h1>
          <h1>{property?.title}</h1>
          <h1 className="font-bold">${property?.price}/night</h1>
          </div>
          </div>
          <Button
          text="Book"
          icon={BsCalendarPlusFill}
          modifier="w-full btn m-auto"
          />
      </div>
};

export default PropertyCard;