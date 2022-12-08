import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------

export class D_U {
  async execute(id: string) {
    // console.log('useCase')
    const result = await prisma.proposals.delete({
      where: {
        id,
      }
    })

    return result;
  }
}