'use client'

import { useEditForm } from "@/app/hooks";
import { Button } from "../Elements";
import { FaEdit, FaTrash } from "react-icons/fa";
import React from "react";
import ImageUpload from "./ImageUpload";

interface EditFormProp {
    propertyId?: string
}


const EditForm: React.FC<EditFormProp> = ({ propertyId }) => {

    const { setEditPropertyInfo, editPropertyInfo, handleEdit, handleEditProperty, handleDelete } = useEditForm(propertyId as string)

  return <section className="rounded-xl">
  <div className="p-8 shadow-lg">
      <form className="space-y-4">
          <div className="w-full">
              <input onChange={handleEditProperty} name="title" value={editPropertyInfo.title} className="input input-solid max-w-full" placeholder="Title" type="text" id="title" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input value={editPropertyInfo.squareFt} name="squareFt" onChange={handleEditProperty} className="input input-solid" placeholder="Square Foot" />
              </div>

              <div>
                <input onChange={handleEditProperty} value={editPropertyInfo.price} name="price" className="input input-solid" placeholder="Price" type="text" id="price" />
              </div>
          </div>

          <div className="w-full">
              <input onChange={handleEditProperty} name="description" value={editPropertyInfo.description} className="input input-solid max-w-full" placeholder="Description" type="text" id="description" />
            </div>
            <div className="w-full grid place-items-center">
            <ImageUpload
                      onChange={(value: any) => setEditPropertyInfo({ ...editPropertyInfo, imageSrc: value })}
                      value={editPropertyInfo.imageSrc} 
                     />
            </div>
          <div className="mt-4">
              <Button 
               modifier="rounded-lg btn w-full"
               icon={FaEdit}
               text="Edit"
               clickEvent={handleEdit}
               />
          </div>
          <Button
          icon={FaTrash}
          modifier="bg-red-500 btn w-full"
          text="Delete"
          clickEvent={handleDelete}
          />
      </form>
  </div>
</section>
};

export default EditForm;
