'use client'

import { useProperty } from "@/app/hooks";
import { usePathname } from "next/navigation";

const page = () => {

  const pathname = usePathname();
  const propertyId = pathname?.toString().replace(/^\/dashboard\/properties\//, "");
  const { data: property } = useProperty(propertyId as string)

  console.log(propertyId);
  

  return <div>page</div>;
};

export default page;
