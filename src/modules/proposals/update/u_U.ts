import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------
interface IU_U {
  id: string;
  message: string;
  shares: number;
}

export class U_U {
  async execute({ 
    id, 
    message,
    shares,
  }: IU_U) {
    console.log('useCase')
    const result = await prisma.proposals.update({
      where: {
        id,
      },
      data: {
        message,
        shares,
      }
    })

    return result;
  }
}