import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------
interface IC_U {
  id: string;
  message: string;
  id_comment: string;
  id_image: string;
  id_user: string;
}

export class C_U {
  async execute({
    id, 
    message, 
    id_comment,
    id_image,
    id_user,
  }: IC_U) {
    
    const result = await prisma.responses.create({
      data: {
        id, 
        message,
        id_comment,
        id_image,
        id_user,
      }
    })

    return result;
  }
}