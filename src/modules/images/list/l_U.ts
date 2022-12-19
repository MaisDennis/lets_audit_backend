import { prisma } from "../../..//database/prismaClient";
import { getFileStream, listFile } from "../../../config/s3"
// -----------------------------------------------------------------------------

export class L_U {
  async execute(key: string) {
    // console.log(take)
    // const imageResult = await prisma.images.findFirst({
    //   where: {
    //     id,
    //   },
    // })

    // const key = imageResult.file_url.slice(8)
    // const key = "d689fa9385fca0b41ce3cd312db3ab7f"
    console.log(key)
    
    // const result = await listFile(key)
    // let image
  
    // result.Contents.map(r => {
    //   if(r.Key === key) image = r
    //   else image = null
    // })
    
    // return image;

    const readStream = getFileStream(key)
    // console.log(readStream)
    return readStream
    // readStream.pipe(res)
  }
}