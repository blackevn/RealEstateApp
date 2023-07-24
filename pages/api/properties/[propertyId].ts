import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const { propertyId } = req.query;

  if (req.method === 'GET') {
   
  try {

    if (!propertyId || typeof propertyId !== 'string') {
      throw new Error('Invalid ID');
    }

    const post = await prisma.properties.findUnique({
      where: {
        id: propertyId,
      },
      include: {
        user: true,
        bookings: {
          include: {
            user: true
          },
          orderBy: {
            createdAt: 'desc'
          }
        },
      },
    });

    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}

if (req.method === 'DELETE') {

  const { currentUser } = await serverAuth(req, res);    

  try {
    

    if (!currentUser) {
      throw new Error('Invalid ID');
    }
    
    if (!propertyId || typeof propertyId !== 'string') {
      throw new Error('Invalid ID');
    }
  
    const properties = await prisma.properties.deleteMany({
      where: {
        id: propertyId,
        userId: currentUser.id
      }
    });
  
    return res.status(200).json(properties);
  
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
}