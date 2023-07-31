import { IUser, Listing } from "@/types/interfaces";
import axios from "axios";
import { useState } from "react";
import useToggle from "./useToggle";
import useCurrentUser from "./useCurrentUser";

const useEditUser = () => {

    const initialUserInfo: IUser = {
        name: '',
        email: '',
        image: '',
    }

    const [ editData, setEditData ] = useState<IUser>(initialUserInfo)
    const { mutate: mutateUser } = useCurrentUser()
    const [ editUser, handleEditUser, setEditUser ] = useToggle(false)
    const handleUserEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name, type, checked } = e.target
      const newValue = type === 'checkbox' ? checked : value
      setEditData(prevData => ({...prevData, [name] : newValue }))
    }

    const sendEditData = () => {
      axios.patch('/api/users/edit', editData)
      setEditUser(false)
      setEditData(initialUserInfo)
      mutateUser()
    }

  return { handleUserEditChange, editData, setEditData, 
          sendEditData, setEditUser, editUser, 
          handleEditUser
         };
};

export default useEditUser;
