import prisma from "@/libs/prismadb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const { userId } = req.query;

      if (!userId || typeof userId !== "string") {
        throw new Error("Invalid ID");
      }

      const existingUser = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

         return res.status(200).json({existingUser});
    } catch (error) {
      console.log(error);
      return res.status(400).end();
    }
  } else {
    console.log(res.status(400).end());
  }
}