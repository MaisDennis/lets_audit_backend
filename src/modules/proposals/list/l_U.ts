import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------

export class L_U {
  async execute() {
    // console.log('useCase')
    const result = await prisma.proposals.findMany({
      include: {
        comment: true,
        upvote: true,
        relevance: true,
      }
    }
      
    )

    return result;
  }
}