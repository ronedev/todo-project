"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const TaskController_1 = require("../controllers/TaskController");
exports.router = express_1.default.Router();
// Handling GET / Request
exports.router.get("/", (req, res) => {
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
exports.router.get("/tasks", TaskController_1.getAllTasks);
//Getting all tasks from a user
exports.router.get("/tasks/:userId", TaskController_1.getTaskByUser);
