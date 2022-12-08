import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------

export class D_U {
  async execute(id: string) {
    const result = await prisma.responses.delete({
      where: {
        id,
      }
    })

    return result;
  }
}