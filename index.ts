// Importing module
import bodyParser from "body-parser";
import cors from "cors"
import express from "express";
//Importing routes
import {router} from './routes'

const app = express();
const PORT: Number = 3001;

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.use(router)

// Server setup
app.listen(PORT, () => {
  console.log(
    "The application is listening " + "on port http://localhost:" + PORT
  );
});