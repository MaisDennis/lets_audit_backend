import { Request, Response } from "express";
// -----------------------------------------------------------------------------
import { D_U } from "./d_U";

export class d_C {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    console.log(id)

    proceed()
    
    async function proceed() {
      try {

        const d_Use = new D_U();
        const result = await d_Use.execute(id)

        return response.json(result)
      }
      catch (err:any) {
        return response.status(400).json(err.message)
      }
    }
  }
}