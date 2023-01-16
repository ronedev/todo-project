// Importing module
import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT: Number = 3000;

// Handling GET / Request
app.get("/", (req, res) => {
  res.send("Welcome to todo-proyect backend!");
});

// Server setup
app.listen(PORT, () => {
  console.log(
    "The application is listening " + "on port http://localhost:" + PORT
  );
});

const prisma = new PrismaClient();

async function main() {
    await prisma.$connect()
  
    await prisma.user.create({
      data: {
        name: 'Rich',
        email: 'hello@prisma.com',
        tasks: {
          create: {
            name: 'My first task',
            description: 'Lots of really interesting stuff',
          },
        },
      },
    })
  
    const allUsers = await prisma.user.findMany({
      include: {
        tasks: true,
      },
    })
    console.dir(allUsers, { depth: null })
  }

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
