// Importing module
import express from "express";
//Importing routes
import {router} from './routes'

const app = express();
const PORT: Number = 3001;

app.use(router)

// Server setup
app.listen(PORT, () => {
  console.log(
    "The application is listening " + "on port http://localhost:" + PORT
  );
});