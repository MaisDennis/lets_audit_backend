
import { prisma } from "../../../database/prismaClient";
// -----------------------------------------------------------------------------
interface IU_U {
  id: string;
  id_proposal: string;
  thumbs_up?: boolean,
}

export class U_U {
  async execute({ 
    id, 
    id_proposal,
    thumbs_up,
  }: IU_U) {
    
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
        id,
      },
      data: {
        upvote: {
          create: [
            {
              proposal: {
                connect: {
                  id: id_proposal,
                }
              },
              thumbs_up: thumbs_up,
            }
          ]
        }
      }
    })

    return result;
  }
}