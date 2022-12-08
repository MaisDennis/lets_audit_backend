import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------
interface IC_U {
  id: string;
  message: string;
  id_proposal: string;
  id_user: string;
}

export class C_U {
  async execute({
    id, 
    message, 
    id_proposal,
    id_user,
  }: IC_U) {
    
    const result = await prisma.comments.create({
      data: {
        id, 
        message,
        id_proposal, 
        id_user,
        
      }
    })

    return result;
  }
}