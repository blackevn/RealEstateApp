import { useEditUser } from "@/app/hooks";
import React from "react";
import { Button, Input } from "../Elements";
import { FaArrowAltCircleRight, FaAt, FaUser } from "react-icons/fa";
import ImageUpload from "./ImageUpload";

const EditUser = () => {

    const { editData, handleUserEditChange, sendEditData, setEditData } = useEditUser()

  return <section className="rounded-xl">
  <div className="p-8 shadow-lg">
      <form className="space-y-4">
          <div className="w-full ">
              <label className="sr-only" htmlFor="name">Name</label>
              <Input 
              icon={FaUser}
              name='name' 
              value={editData.name} 
              modifier="input w-full" 
              placeholder="Name" 
              type="text" 
              onChange={handleUserEditChange}
              id="name" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <Input 
                  icon={FaAt} 
                  name="email" 
                  value={editData.email}  
                  modifier="input w-full" 
                  placeholder="Email" 
                  type="email" 
                  onChange={handleUserEditChange}
                  id="email" />
              </div>

              {/* <div>
                  <label className="sr-only" htmlFor="phone">Phone</label>
                  <input name="email" className="input input-solid" placeholder="Phone Number" type="tel" id="phone" />
              </div> */}
          </div>

          <div className="w-full">
          <ImageUpload
            onChange={(value: any) => setEditData({ ...editData, image: value })}
            value={editData.image} 
            />
          </div>


          <div className="mt-4">
              <Button 
              icon={FaArrowAltCircleRight}
              modifier="btn w-full"
              text="Edit"
              clickEvent={sendEditData}
              />
              
          </div>
      </form>
  </div>
</section>
};

export default EditUser;
