import express from "express";
import appRoute from "./routes/appRoute.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/", appRoute);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
