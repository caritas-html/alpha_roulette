import express from "express";
import appRoute from "./routes/appRoute.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/", appRoute);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
