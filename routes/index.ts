import express from "express";
import { getAllUserWhitTheirTasks, getUserByIdWhitTheirTasks } from './../controllers/UserController';
import {getAllTasks, getTaskByUser} from "../controllers/TaskController"

export const router = express.Router();

// Handling GET / Request
router.get("/", (req, res) => {
  res.send("Welcome to todo-proyect backend!");
});

//Getting all users and their tasks
router.get("/users", getAllUserWhitTheirTasks);

//Getting one user and their tasks
router.get("/user/:id", getUserByIdWhitTheirTasks);

//Getting all tasks
router.get("/tasks", getAllTasks);

//Getting all tasks from a user
router.get("/tasks/:userId", getTaskByUser);

//Update task

//Delete task

//Delete all tasks
