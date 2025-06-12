import express from "express";
import router from "./routes/auth.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", router);

app.get("/", (_req, res) => {
  res.send(`<h1>Bienvenido</h1><a href="/auth">Iniciar con Google</a>`);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
