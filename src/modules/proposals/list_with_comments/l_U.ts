import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------

export class L_U {
  async execute(id: string) {
    // console.log('useCase')
    const result = await prisma.proposals.findMany({
      where: {
        id,
      },
      take: 5,
      orderBy: {
        relevance_votes: 'desc',
      },
      include: {
        comment: true,
      }
    })

    return result;
  }
}