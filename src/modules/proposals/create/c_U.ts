import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------
interface IC_U {
  id: string;
  message: string;
  id_user: string;
}

export class C_U {
  async execute({
    id, 
    message, 
    id_user,
  }: IC_U) {
    console.log('useCase')
    const result = await prisma.proposals.create({
      data: {
        id, 
        message, 
        id_user,
        
      }
    })

    return result;
  }
}