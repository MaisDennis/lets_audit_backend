import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------

export class D_U {
  async execute(id: string) {
    const result = await prisma.comments.delete({
      where: {
        id,
      }
    })

    return result;
  }
}