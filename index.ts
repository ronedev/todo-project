// Importing module
import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT: Number = 3001;

const prisma = new PrismaClient()

// Handling GET / Request
app.get("/", (req, res) => {
  res.send("Welcome to todo-proyect backend!");
});

//Getting all users and their tasks
app.get("/users", async (req ,res)=>{
    await prisma.$connect()
    const allUsers = await prisma.user.findMany({
        include: {
          tasks: true,
        },
      })
    res.json(allUsers)
})

//Getting one user and their tasks
app.get("/users/:id", async (req ,res)=>{
    const {id} = req.params
    await prisma.$connect()
    const user = await prisma.user.findUnique({
        where: {id},
        include: {
          tasks: true,
        },
      })
    res.json(user)
})

//Getting all tasks
app.get("/tasks", async (req ,res)=>{
    await prisma.$connect()
    const allTasks = await prisma.task.findMany()
    res.json(allTasks)
})

//Getting all tasks from a user
app.get("/tasks/:userId", async (req ,res)=>{
    const {userId} = req.params
    await prisma.$connect()
    const allTasks = await prisma.task.findMany({where: {id: userId}})
    res.json(allTasks)
})

// Server setup
app.listen(PORT, () => {
  console.log(
    "The application is listening " + "on port http://localhost:" + PORT
  );
});