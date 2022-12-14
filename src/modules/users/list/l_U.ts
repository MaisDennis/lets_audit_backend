import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------

export class L_U {
  async execute(id: string) {
    // console.log('useCase')
    const result = await prisma.users.findFirst({
      where: {
        id,
      }
    })

    return result;
  }
}