import { PrismaClient, Task, User } from "@prisma/client";

const prisma = new PrismaClient();

//Getting all users and their tasks
export const getAllUserWhitTheirTasks = async (
  req: any,
  res: { json: (arg0: (User & { tasks: Task[] })[]) => void }
) => {
  await prisma.$connect();
  const allUsers = await prisma.user.findMany({
    include: {
      tasks: true,
    },
  });
  res.json(allUsers);
};

//Getting one user and their tasks
export const getUserByIdWhitTheirTasks = async (
  req: { params: { id: any } },
  res: { json: (arg0: (User & { tasks: Task[] }) | null) => void }
) => {
  const { id } = req.params;
  await prisma.$connect();
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      tasks: true,
    },
  });
  res.json(user);
};
