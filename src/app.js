import express from "express";
import mongoose from "mongoose";
import mocksRouter from "./routes/mocks.router.js";

const app = express();
const PORT = 8080;

// middlewares
app.use(express.json());

// rutas
app.use("/api/mocks", mocksRouter);

// server
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
