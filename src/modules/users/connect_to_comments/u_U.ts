
import { prisma } from "../../../database/prismaClient";
// -----------------------------------------------------------------------------
interface IU_U {
  id: string;
  id_comment: string;
}

export class U_U {
  async execute({ 
    id, 
    id_comment,
  }: IU_U) {
    // console.log(id, id_comment)
    
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
        like: {
          create: [
            {
              comment: {
                connect: {
                  id: id_comment,
                }
              }
            }
          ]
        }
      }
    })

    return result;
  }
}