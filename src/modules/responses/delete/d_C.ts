import { Request, Response } from "express";
// -----------------------------------------------------------------------------
import { D_U } from "./d_U";

export class d_C {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { responseData } = request.query;
    // console.log(responseData.image.file_url.slice(8))
    // console.log('HIIIII')
    proceed()
    
    async function proceed() {
      try {

        const d_Use = new D_U();
        const result = await d_Use.execute(id, responseData)

        return response.json(result)
      }
      catch (err:any) {
        return response.status(400).json(err.message)
      }
    }
  }
}