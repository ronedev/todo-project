"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing module
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
//Importing routes
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const PORT = 3001;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(routes_1.router);
// Server setup
app.listen(PORT, () => {
    console.log("The application is listening " + "on port http://localhost:" + PORT);
});
