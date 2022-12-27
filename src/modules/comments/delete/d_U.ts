import { prisma } from "../../..//database/prismaClient";
const { deleteFile } = require("../../../config/s3");
// -----------------------------------------------------------------------------

export class D_U {
  async execute(id: string, commentData?: any) {
    const result = await prisma.comments.delete({
      where: {
        id,
      }
    })

    if (result && commentData && commentData.id_image) {
      const imageResult = await prisma.images.delete({
        where: {
          id: commentData.id_image,
        }
      })

      if (imageResult && commentData.image.type === "FILE") {
        const fileResult = await deleteFile(commentData.image.file_url.slice(8))
        return [result, imageResult, fileResult]
      }
      else {
        return [result, imageResult]
      }
    }
    else {
      return result;
    }
  }
}