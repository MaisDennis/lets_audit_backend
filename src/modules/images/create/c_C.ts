import { Request, Response } from "express";
import { v4 as uuid } from 'uuid';
// -----------------------------------------------------------------------------
import { C_U } from "./c_U";

export class c_C {
  async handle(request: Request, response: Response) {
    const id_image = "image." + uuid();
    const file = request.file;

    let id_user: any, type: any, url: any
    if (file) {
      id_user = request.query.id_user
      type = request.query.type
    }
    else {
      id_user = request.body.params.id_user
      type = request.body.params.type
      url = request.body.params.url
    }

    proceed()
    
    async function proceed() {
      try {
        
        const c_Use = new C_U();
        const result = await c_Use.execute({
          id: id_image,
          file,
          type,
          url,
          id_user: id_user,
        })

        return response.json(result)
      }
      catch (err:any) {
        return response.status(400).json(err.message)
      }
    }
  }
}