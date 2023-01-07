
import { prisma } from "../../../database/prismaClient";
// -----------------------------------------------------------------------------
interface ID_U {
  id: string;
  id_proposal: string;
}

export class D_U {
  async execute({ 
    id,
    id_proposal
  }: ID_U) {
    
    // check of user exists
    const check = await prisma.upvotesOnUsers.findFirst({
      where: {
        AND: [
          {
            id_proposal,
          },
          {
            id_user: id,
          }
        ]
      }
    })

    if(!check) {
      throw new Error('upvotes on user does not exist.')
    }
    
    const result = await prisma.upvotesOnUsers.delete({
      where: {
        id_proposal_id_user: {
          id_proposal,
          id_user: id,
        },
      }
    })

    return result;
  }
}