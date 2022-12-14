import { Request, Response } from "express"
// -----------------------------------------------------------------------------
import { U_U } from "./u_U"
// -----------------------------------------------------------------------------

export class u_C {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { 
      id_comment,
    } = request.body;

    proceed()
    
    async function proceed() {
      try {

        const u_Use = new U_U();
        const result = await u_Use.execute({
          id,
          id_comment,
        })

        return response.json(result)
      }
      catch (err:any) {
        return response.status(400).json(err.message)
      }
    }
  }
}