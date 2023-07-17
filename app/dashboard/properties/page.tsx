'use client'

import { AddProperty, Button, Modal } from "@/app/components";
import { useToggle } from "@/app/hooks";
import { FaPlus } from "react-icons/fa";
import { BsHouseAdd } from "react-icons/bs";
import { SetStateAction } from "react";

const page = () => {

    const [ modalCheck, handleModalCheck, setModalCheck ] = useToggle(false)
  
  return <>
            <div className=" flex justify-between">
                <h1 className="text-2xl font-bold">All properties</h1>     
                <div>
                <Modal
                label="Add your property"
                modifier="btn px-4 rounded-full text-[0.75rem]"
                icon={BsHouseAdd}
                modal={modalCheck ? 'modal-1' : ''}
                toggle={modalCheck}
                onClick={() => handleModalCheck(true)}
                checked={modalCheck}
                modalOff={() => setModalCheck(false)}
                >
                    <AddProperty 
                    handleModalCheck={handleModalCheck} 
                    modalCheck={modalCheck} 
                    setModalCheck={setModalCheck} />
                </Modal>
                </div>       
            </div>
         </>;
};

export default page;