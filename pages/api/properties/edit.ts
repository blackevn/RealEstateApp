import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/libs/serverAuth";
import prisma from "@/libs/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== 'PATCH') {
      return res.status(405).end();
    }
  
    try {
  
      const { title, description, imageSrc, price, id: propertyId } = req.body;
    
          if (!title || !description) {
        throw new Error('Missing fields');
      }
  
      const updatedUser = await prisma.properties.update({
        where: {
          id: propertyId,
        },
          data: {
          price,
          title,
          imageSrc,
          description
        }
      });
  
      return res.status(200).json(updatedUser);
    } catch (error) {
      console.log(error);
      return res.status(400).end();
    }
  }