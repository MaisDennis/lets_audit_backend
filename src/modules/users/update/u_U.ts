import { prisma } from "../../..//database/prismaClient";
// -----------------------------------------------------------------------------
interface IU_U {
  id: string;
  avatar: string;
  email: string;
  name: string;
}

export class U_U {
  async execute({ 
    id, 
    avatar, 
    email, 
    name 
  }: IU_U) {
    console.log('useCase')
    const result = await prisma.users.update({
      where: {
        id,
      },
      data: {
        avatar,
        email,
        name,
      }
    })

    return result;
  }
}