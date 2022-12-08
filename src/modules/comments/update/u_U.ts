import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------
interface IU_U {
  id: string;
  message: string;
  likes: number;
  shares: number;
}

export class U_U {
  async execute({ 
    id, 
    message,
    likes,
    shares,
  }: IU_U) {
    console.log('useCase')
    const result = await prisma.comments.update({
      where: {
        id,
      },
      data: {
        message,
        likes,
        shares,
      }
    })

    return result;
  }
}