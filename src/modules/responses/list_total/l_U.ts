import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------

export class L_U {
  async execute(id: string) {
    
    const result = await prisma.responses.findMany({
      where: {
        id_comment: id,
      },
    })

    return result;
  }
}