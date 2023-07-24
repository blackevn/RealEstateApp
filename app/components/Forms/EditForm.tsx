import { useEditForm } from "@/app/hooks";
import { Button } from "../Elements";
import { FaTrash } from "react-icons/fa";



const EditForm = () => {

    const { setEditPropertyInfo, editPropertyInfo, handleEdit, handleEditProperty } = useEditForm()

  return <section className="bg-gray-2 rounded-xl">
  <div className="p-8 shadow-lg">
      <form className="space-y-4">
          <div className="w-full">
              <label className="sr-only" htmlFor="name">Name</label>
              <input className="input input-solid max-w-full" placeholder="Name" type="text" id="name" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input className="input input-solid" placeholder="Email address" type="email" id="email" />
              </div>

              <div>
                  <label className="sr-only" htmlFor="phone">Phone</label>
                  <input className="input input-solid" placeholder="Phone Number" type="tel" id="phone" />
              </div>
          </div>

          <div className="w-full">
              <label className="sr-only" htmlFor="message">Message</label>

              <textarea className="textarea textarea-solid max-w-full" placeholder="Message" rows={8} id="message"></textarea>
          </div>

          <div className="mt-4">
              <button type="button" className="rounded-lg btn btn-primary btn-block">Edit</button>
          </div>
          <Button
          icon={FaTrash}
          modifier="bg-red-500/40 btn"
          text="Delete"
          />
      </form>
  </div>
</section>
};

export default EditForm;
