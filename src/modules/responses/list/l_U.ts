import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------

export class L_U {
  async execute(id: string, take: number) {
    // console.log('useCase')
    const result = await prisma.responses.findMany({
      where: {
        id_comment: id,
      },
      orderBy: {
        created_at: 'desc',
      },
      take: take,
      include: {
        like_response: true,
      }
    })

    return result;
  }
}