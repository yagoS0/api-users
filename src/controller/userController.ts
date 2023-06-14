import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express";
import { z } from "zod";

const prisma = new PrismaClient();

export async function getUser(): Promise<{}> {
  const users = await prisma.user.findMany();
  console.log('sucesso')
  return { users };
}

export async function createUser(
  request: Request,
  response: Response
): Promise<{}> {
  const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    celNumber: z.string(),
  });

  const { name, email, celNumber } = createUserSchema.parse(request.body);

  await prisma.user.create({
    data: {
      name,
      email,
      celNumber,
    },
  });

  return response.status(201).send("Enviado com sucesso!");
}
