import { Request, Response } from "express";
// -----------------------------------------------------------------------------
import { L_U } from "./l_U";

export class l_C {
  async handle(request: Request, response: Response) {
    const { email } = request.params

    proceed()
    
    async function proceed() {
      try {

        const l_Use = new L_U();
        const result = await l_Use.execute(email)

        return response.json(result)
      }
      catch (err:any) {
        return response.status(400).json(err.message)
      }
    }
  }
}