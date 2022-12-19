const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
// -----------------------------------------------------------------------------
import { prisma } from "../../..//database/prismaClient";
const { uploadFile, getFileStream } = require('../../../config/s3')
// -----------------------------------------------------------------------------
interface IC_U {
  id: string;
  id_user: string;
}

export class C_U {
  async execute({
    id, 
    file, 
    id_user,
  }: IC_U) {

        // upload file (image)
    const fileResult = await uploadFile(file)
    await unlinkFile(file.path)
    // res.send({ imagePath: `/images/${fileResult.Key}`})
    const file_url = `/images/${fileResult.Key}`
    
    const result = await prisma.images.create({
      data: {
        id,
        id_user,
        file_url,
      }
    })

    return result;
  }
}