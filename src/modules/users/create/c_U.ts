import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------
interface IC_U {
  id: string;
  avatar: string;
  email: string;
  name: string;
}

export class C_U {
  async execute({ 
    id, 
    avatar, 
    email, 
    name 
  }: IC_U) {
    console.log('useCase')
    const result = await prisma.users.create({
      data: {
        id,
        avatar,
        email,
        name,
        
      }
    })

    return result;
  }
}