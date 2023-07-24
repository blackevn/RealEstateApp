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

    const { setEditPropertyInfo, editPropertyInfo, handleEdit, handleEditProperty } = useEditForm(propertyId as string)

  return <section className="bg-gray-2 rounded-xl">
  <div className="p-8 shadow-lg">
      <form className="space-y-4">
          <div className="w-full">
              <label className="sr-only" htmlFor="name">Title</label>
              <input onChange={handleEditProperty} name="title" value={editPropertyInfo.title} className="input input-solid max-w-full" placeholder="Title" type="text" id="name" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input value={editPropertyInfo.squareFt} name="squareFt" onChange={handleEditProperty} className="input input-solid" placeholder="Square Foot" />
              </div>

              <div>
                  <label className="sr-only" htmlFor="phone">Phone</label>
                  <input onChange={handleEditProperty} value={editPropertyInfo.price} name="price" className="input input-solid" placeholder="Price" type="text" id="phone" />
              </div>
          </div>

          <div className="w-full">
              <label className="sr-only" htmlFor="message">Description</label>
              <input onChange={handleEditProperty} value={editPropertyInfo.description} name="description" className="input input-solid" placeholder="" type="text" id="phone" />
            </div>
            <div className="w-full grid place-items-center">
            <ImageUpload
            onChange={(value: any) => setEditPropertyInfo({...editPropertyInfo, imageSrc: value})}
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
          />
      </form>
  </div>
</section>
};

export default EditForm;
