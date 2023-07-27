import { IUser, Listing } from "@/types/interfaces";
import { useState } from "react";

const useEditUser = () => {

    const initialUserInfo: IUser = {
        createdAt: "",
        updatedAt: "",
        emailVerified: null,
        id: "",
        name: null,
        email: null,
        image: null,
    }

    const [ editData, setEditData ] = useState<IUser>(initialUserInfo)

    const handleUserEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name, type, checked } = e.target
      const newValue = type === 'checkbox' ? checked : value
      setEditData(prevData => ({...prevData, [name] : newValue }))
    }

  return { handleUserEditChange, editData, setEditData };
};

export default useEditUser;
