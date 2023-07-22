
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/libs/prismadb'
import serverAuth from '@/libs/serverAuth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
interface IParams {
    listingId?: string;
  }
  
  if (req.method === 'POST') {
  
    const { currentUser } = await serverAuth(req, res); 
  
    if (!currentUser) {
       throw new Error('Login to favorite')
    }
  
    const { listingId } = req.body;
  
    if (!listingId || typeof listingId !== 'string') {
      throw new Error('Invalid ID');
    }
  
    let favoriteIds = [...(currentUser.favoriteIds || [])];
  
    favoriteIds.push(listingId);
  
    const user = await prisma.user.update({
      where: {
        id: currentUser.id
      },
      data: {
        favoriteIds
      }
    });
  
    return res.status(200).json(user)
  }
  
  if (req.method === 'DELETE') {

    const { currentUser } = await serverAuth(req, res); 
  
    if (!currentUser) {
      throw new Error('Login to favorite')
    }
  
    const { listingId } = req.body;
  
    if (!listingId || typeof listingId !== 'string') {
      throw new Error('Invalid ID');
    }
  
    let favoriteIds = [...(currentUser.favoriteIds || [])];
  
    favoriteIds = favoriteIds.filter((id) => id !== listingId);
  
    const user = await prisma.user.update({
      where: {
        id: currentUser.id
      },
      data: {
        favoriteIds
      }
    });
  
    return res.status(200).json(user)
  }
}