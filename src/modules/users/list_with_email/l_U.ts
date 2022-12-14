import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------

export class L_U {
  async execute(email: string) {
    // console.log('useCase')
    const result = await prisma.users.findFirst({
      where: {
        email,
      }
    })

    return result;
  }
}