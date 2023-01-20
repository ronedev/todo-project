import express from "express";
import {getAllTasks, getTaskByUser} from "../controllers/TaskController"

export const router = express.Router();

// Handling GET / Request
router.get("/", (req, res) => {
  res.send("Welcome to todo-proyect backend!");
});

// //Getting all users and their tasks
// router.get("/users", async (req, res) => {
//   await prisma.$connect();
//   const allUsers = await prisma.user.findMany({
//     include: {
//       tasks: true,
//     },
//   });
//   res.json(allUsers);
// });

// //Getting one user and their tasks
// router.get("/users/:id", async (req, res) => {
//   const { id } = req.params;
//   await prisma.$connect();
//   const user = await prisma.user.findUnique({
//     where: { id },
//     include: {
//       tasks: true,
//     },
//   });
//   res.json(user);
// });

//Getting all tasks
router.get("/tasks", getAllTasks);

//Getting all tasks from a user
router.get("/tasks/:userId", getTaskByUser);
