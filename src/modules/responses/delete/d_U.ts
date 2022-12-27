import { prisma } from "../../..//database/prismaClient";
const { deleteFile } = require("../../../config/s3");
// -----------------------------------------------------------------------------

export class D_U {
  async execute(id: string, responseData: any) {
    const result = await prisma.responses.delete({
      where: {
        id,
      }
    })

    if (result && responseData && responseData.id_image) {
      const imageResult = await prisma.images.delete({
        where: {
          id: responseData.id_image,
        }
      })
      if (imageResult && responseData.image.type === "FILE") {
        const fileResult = await deleteFile(responseData.image.file_url.slice(8))
        return [result, imageResult, fileResult]
      }
      else {
        return [result, imageResult]
      }
    }
    else {
      return result
    }
  }
}