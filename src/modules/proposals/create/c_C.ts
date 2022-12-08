import { Request, Response } from "express";
import { v4 as uuid } from 'uuid';
// -----------------------------------------------------------------------------
import { C_U } from "./c_U";

export class c_C {
  async handle(request: Request, response: Response) {
    const id = "propo." + uuid();

    const { 
      message,
      id_user,
    } = request.body;

    proceed()
    
    async function proceed() {
      try {

        const c_Use = new C_U();
        const result = await c_Use.execute({
          id,
          message,
          id_user,
        })

        return response.json(result)
      }
      catch (err:any) {
        return response.status(400).json(err.message)
      }
    }
  }
}