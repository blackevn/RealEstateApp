'use client'

import { useCurrentUser } from "@/app/hooks";
import React from "react";

const UserDetails = () => {

        const { data: user } = useCurrentUser()

  return <div className="grid grid-cols-12">
                <div className="grid rounded-xl col-span-5 h-full bg-gray-1 p-4">
                        <h1>Profile</h1>

                </div>
                <div className="h-full rounded-xl grid col-span-7 bg-gray-1 p-4">
                        <h1>Favorites</h1>
                </div>
        </div>
};

export default UserDetails;
