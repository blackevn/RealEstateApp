'use client'

import { Button, Modal } from "@/app/components";
import { useToggle } from "@/app/hooks";
import { FaPlus } from "react-icons/fa";
import { BsHouseAdd } from "react-icons/bs";

const page = () => {

    const [ modalCheck, handleModalCheck, setModalCheck ] = useToggle(false)
  
  return <>
            <div className=" flex justify-between">
                <h1>All properties</h1>     
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
                    <h1></h1>
                </Modal>
                </div>       
            </div>
         </>;
};

export default page;
