
import { prisma } from "../../../database/prismaClient";
// -----------------------------------------------------------------------------
interface ID_U {
  id: string;
  id_comment: string;
}

export class D_U {
  async execute({ 
    id, 
    id_comment,
  }: ID_U) {
    // console.log(id, id_comment)
    
    // check of user exists
    const check = await prisma.commentsOnUsers.findFirst({
      where: {
        AND: [
          {
            id_comment,
          },
          {
            id_user: id,
          },
        ]
      }
    })

    if(!check) {
      throw new Error('comment on user does not exist.')
    }
    
    const result = await prisma.commentsOnUsers.delete({
      where: {
        id_comment_id_user: {
          id_comment,
          id_user: id,
        },
      }
    })

    return result;
  }
}