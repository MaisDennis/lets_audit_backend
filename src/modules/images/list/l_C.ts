import { Request, Response } from "express";
// -----------------------------------------------------------------------------
import { L_U } from "./l_U";

export class l_C {
  async handle(request: Request, response: Response) {
    const { key } = request.params;

    proceed()
    
    async function proceed() {
      try {

        const l_Use = new L_U();
        const result = await l_Use.execute(key)

        // return response.json(result)
        result.pipe(response)
        // console.log(image)
        // response.send(image)
      }
      catch (err:any) {
        return response.status(400).json(err.message)
      }
    }
  }
}