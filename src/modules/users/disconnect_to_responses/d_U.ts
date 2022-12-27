
import { prisma } from "../../../database/prismaClient";
// -----------------------------------------------------------------------------
interface ID_U {
  id: string;
  id_response: string;
}

export class D_U {
  async execute({ 
    id, 
    id_response,
  }: ID_U) {
    // console.log(id, id_response)
    
    // check of user exists
    const check = await prisma.responsesOnUsers.findFirst({
      where: {
        AND: [
          {
            id_response,
          },
          {
            id_user: id,
          },
        ]
      }
    })

    if(!check) {
      throw new Error('response on user does not exist.')
    }
    
    const result = await prisma.responsesOnUsers.delete({
      where: {
        id_response_id_user: {
          id_response,
          id_user: id,
        },
      }
    })

    return result;
  }
}