
import { prisma } from "../../../database/prismaClient";
// -----------------------------------------------------------------------------
interface IU_U {
  id: string;
  id_proposal: string;
}

export class U_U {
  async execute({ 
    id, 
    id_proposal,
  }: IU_U) {
    // console.log(id, id_proposal)
    
    // check of user exists
    const check = await prisma.users.findFirst({
      where: {
        id,
      }
    })

    if(!check) {
      throw new Error('user does not exist.')
    }
    
    const result = await prisma.users.update({
      where: {
        id: id,
      },
      data: {
        relevance: {
          create: [
            {
              proposal: {
                connect: {
                  id: id_proposal,
                }
              }
            }
          ]
        }
      }
    })
    if (result) {
      const relevanceOnUsersResult = await prisma.relevancesOnUsers.findMany({
        where: {
          id_proposal: id_proposal,
        }
      })

      const relevanceCountResult = await prisma.proposals.update({
        where: {
          id: id_proposal,
        },
        data: {
          relevance_count: relevanceOnUsersResult.length
        }
      })
      console.log(relevanceCountResult)
    }

    return result;
  }
}