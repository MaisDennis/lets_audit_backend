
import { prisma } from "../../../database/prismaClient";
// -----------------------------------------------------------------------------
interface IU_U {
  id: string;
  id_proposal: string;
  thumbs_down?: boolean,
}

export class U_U {
  async execute({ 
    id, 
    id_proposal,
    thumbs_down,
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
        downvote: {
          create: [
            {
              proposal: {
                connect: {
                  id: id_proposal,
                }
              },
              thumbs_down: thumbs_down,
            }
          ]
        }
      }
    })

    return result;
  }
}