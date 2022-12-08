import { Request, Response } from "express";
import { v4 as uuid } from 'uuid';
// -----------------------------------------------------------------------------
import { C_U } from "./c_U";

export class c_C {
  async handle(request: Request, response: Response) {
    const id = "_user." + uuid();

    const { 
      avatar, 
      email, 
      name 
    } = request.body;

    proceed()
    
    async function proceed() {
      try {

        const c_Use = new C_U();
        const result = await c_Use.execute({
          id,
          avatar,
          email,
          name,
        })

        return response.json(result)
      }
      catch (err:any) {
        return response.status(400).json(err.message)
      }
    }
  }
}