import { Request, Response } from "express";
import { v4 as uuid } from 'uuid';
// -----------------------------------------------------------------------------
import { U_U } from "./u_U";

export class u_C {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const {
      message,
      likes,
      shares,
    } = request.body;

    proceed()
    
    async function proceed() {
      try {

        const u_Use = new U_U();
        const result = await u_Use.execute({
          id,
          message,
          likes,
          shares,
        })

        return response.json(result)
      }
      catch (err:any) {
        return response.status(400).json(err.message)
      }
    }
  }
}