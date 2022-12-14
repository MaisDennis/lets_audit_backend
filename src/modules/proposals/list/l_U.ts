import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------

export class L_U {
  async execute() {
    // console.log('useCase')
    const result = await prisma.proposals.findMany({
      orderBy: {
        relevance_count: 'desc',
      },
      include: {
        comment: true,
        upvote: true,
        relevance: true,
        test: true,
      }
    }
      
    )

    return result;
  }
}