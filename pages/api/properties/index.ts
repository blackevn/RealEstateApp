import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/libs/prismadb'
import serverAuth from '@/libs/serverAuth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   
    if (req.method === 'POST') {
    
        try {
        const {  title,
            description,
            imageSrc,
            category,
            roomCount,
            bathroomCount,
            squareFt,
            location,
            price, } = req.body

        const { currentUser } = await serverAuth(req, res);      
      
        const properties = await prisma.properties.create({
            data: {
                title,
                description,
                imageSrc,
                category,
                roomCount,
                bathroomCount,
                squareFt,
                locationValue: location.value,
                price,
                userId: currentUser.id
              }
        })

        return res.status(200).json(properties)
      
    } catch (error) {
        console.log(error)
        return res.status(400).json({error})
    }

}

if (req.method === 'GET') {
    try {
        const properties = await prisma.properties.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        return res.status(200).json(properties)
    } catch (error: any) {
        throw new Error(error)
    }
}


}


