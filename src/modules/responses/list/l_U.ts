import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------

export class L_U {
  async execute() {
    // console.log('useCase')
    const result = await prisma.responses.findMany()

    return result;
  }
}