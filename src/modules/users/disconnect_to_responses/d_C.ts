import { Request, Response } from "express"
// -----------------------------------------------------------------------------
import { D_U } from "./d_U"
// -----------------------------------------------------------------------------

export class d_C {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { 
      id_response,
    } = request.query;

    proceed()
    
    async function proceed() {
      try {
        if (typeof id_response !== 'string') throw new Error ('id_comment is not a string')
        const d_Use = new D_U();
        const result = await d_Use.execute({
          id,
          id_response,
        })

        return response.json(result)
      }
      catch (err:any) {
        return response.status(400).json(err.message)
      }
    }
  }
}