import express from "express";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    // MIDDLEWARE

    // 1. Body parser

    // 2. Logger

    // 3. Cookie Parser

    // 4. Cors

    // ROUTES

    // HEALTH CHECKER

    // UNHANDLED ROUTE

    // GLOBAL ERROR HANDLER

    const port = 3000;
    app.listen(port);

    console.log(`Server started on port: ${port}`);
  })
  .catch((error) => console.log(error));
