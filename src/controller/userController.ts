import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

const prisma = new PrismaClient();

export async function getUser(): Promise<{}> {
  const users = await prisma.user.findMany();
  return { users };
}

export async function setUser(
  request: FastifyRequest,
  reply: FastifyReply
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

  return reply.status(201).send("Enviado com sucesso!");
}
