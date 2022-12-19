
import { prisma } from "../../../database/prismaClient";
// -----------------------------------------------------------------------------
interface IU_U {
  id: string;
  id_response: string;
}

export class U_U {
  async execute({ 
    id, 
    id_response,
  }: IU_U) {
    // console.log(id, id_response)
    
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
        like_response: {
          create: [
            {
              response: {
                connect: {
                  id: id_response,
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