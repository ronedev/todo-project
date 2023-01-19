"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing module
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const PORT = 3001;
const prisma = new client_1.PrismaClient();
// Handling GET / Request
app.get("/", (req, res) => {
    res.send("Welcome to todo-proyect backend!");
});
//Getting all users and their tasks
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$connect();
    const allUsers = yield prisma.user.findMany({
        include: {
            tasks: true,
        },
    });
    res.json(allUsers);
}));
//Getting one user and their tasks
app.get("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield prisma.$connect();
    const user = yield prisma.user.findUnique({
        where: { id },
        include: {
            tasks: true,
        },
    });
    res.json(user);
}));
//Getting all tasks
app.get("/tasks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$connect();
    const allTasks = yield prisma.task.findMany();
    res.json(allTasks);
}));
//Getting all tasks from a user
app.get("/tasks/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    yield prisma.$connect();
    const allTasks = yield prisma.task.findMany({ where: { id: userId } });
    res.json(allTasks);
}));
// Server setup
app.listen(PORT, () => {
    console.log("The application is listening " + "on port http://localhost:" + PORT);
});
