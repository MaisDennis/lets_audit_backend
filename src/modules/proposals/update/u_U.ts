import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------
interface IU_U {
  id: string;
  message: string;
  relevance_votes: number;
  up_votes: number;
  down_votes: number;
  shares: number;
}

export class U_U {
  async execute({ 
    id, 
    message,
    relevance_votes,
    up_votes,
    down_votes,
    shares,
  }: IU_U) {
    console.log('useCase')
    const result = await prisma.proposals.update({
      where: {
        id,
      },
      data: {
        message,
        relevance_votes,
        up_votes,
        down_votes,
        shares,
      }
    })

    return result;
  }
}