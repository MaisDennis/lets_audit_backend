import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------

export class L_U {
  async execute(id: string, take: number) {
    // console.log(take)
    const result = await prisma.comments.findMany({
      where: {
        id_proposal: id,
      },
      orderBy: {
        created_at: 'desc',
      },
      take: take,
      include: {
        like_comment: true,
        image: true,
      }
    })

    return result;
  }
}