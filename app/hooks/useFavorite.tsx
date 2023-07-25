'use client'

import { IUser } from "@/types/interfaces";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { Toast } from "../components";
import { AiFillHeart } from "react-icons/ai";
import { FaExclamationTriangle } from "react-icons/fa";
import useToggle from "./useToggle";
import { BsFillHeartbreakFill } from "react-icons/bs";

interface IUseFavorite {
  propertyId?: string;
  currentUser?: IUser | null
}

const useFavorite = ({ propertyId, currentUser }: IUseFavorite) => {
  const router = useRouter();

  const [ favoriteToggle, handleFavoriteToggle ] = useToggle()
  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list?.includes(propertyId as string);
  }, [currentUser, propertyId]);

  const toggleFavorite = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    handleFavoriteToggle()

    if (!favoriteToggle) return   toast.custom(() => (
      <Toast text="Unfavorited" modifier="bg-red-400 text-white" icon={BsFillHeartbreakFill}/>
      ))

    try {
      let request;

      if (hasFavorited) {
        request = () => axios.delete(`/api/favorites/${propertyId}`);
      } else {
        request = () => axios.post(`/api/favorites/${propertyId}`);
      }

      await request();
      router.refresh();
      toast.custom(() => (
        <Toast text="Favorited" modifier="bg-red-400 text-white" icon={AiFillHeart}/>
        ))
    } catch (error) {
      toast.custom(() => (
        <Toast text="Something went wrong" modifier="bg-orange-500 text-white" icon={FaExclamationTriangle}/>
        ))
    }
  }, 
  [
    currentUser, 
    hasFavorited, 
    propertyId, 
    router
  ]);

  return {
    hasFavorited,
    toggleFavorite,
    favoriteToggle, 
    handleFavoriteToggle
  }
}

export default useFavorite;