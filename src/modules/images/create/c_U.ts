const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
import { ImageType } from "@prisma/client";
// -----------------------------------------------------------------------------
import { prisma } from "../../..//database/prismaClient";
const { uploadFile, getFileStream } = require('../../../config/s3')
// -----------------------------------------------------------------------------
interface IC_U {
  id: string;
  file?: any;
  type: ImageType;
  url?: string;
  id_user: string;
}

export class C_U {
  async execute({
    id, 
    file,
    type,
    url,
    id_user,
  }: IC_U) {

    let file_url: any

    // upload file (image)
    if (type === 'FILE') {
      const fileResult = await uploadFile(file)
      await unlinkFile(file.path)
      // res.send({ imagePath: `/images/${fileResult.Key}`})
      file_url = `/images/${fileResult.Key}`
    }
    else file_url = url;
    
    const result = await prisma.images.create({
      data: {
        id,
        type,
        id_user,
        file_url,
      }
    })
    


    return result;
  }
}