'use client'

import { Button } from "@/app/components";
import { useProperty } from "@/app/hooks";
import { usePathname } from "next/navigation";
import { FaEdit } from "react-icons/fa";

const page = () => {

  const pathname = usePathname();
  const propertyId = pathname?.toString().replace(/^\/dashboard\/properties\//, "");
  const { data: property } = useProperty(propertyId as string)

  console.log(property);
  

  return <>
        <div className="flex items-center justify-center">
          <h1>{property?.title}</h1>
          <Button
          icon={FaEdit}
          text="Edit"
          modifier="btn"
          />
        </div>
        </>;
};

export default page;
