import { PrismaClient, Task } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTasks = async (
  req: any,
  res: { json: (arg0: Task[]) => void }
) => {
  await prisma.$connect();
  const allTasks = await prisma.task.findMany();
  res.json(allTasks);
};

export const getTaskByUser = async (
  req: { params: { userId: any } },
  res: { json: (arg0: Task[]) => void }
) => {
  const { userId } = req.params;
  await prisma.$connect();
  const allTasks = await prisma.task.findMany({ where: { id: userId } });
  res.json(allTasks);
};

