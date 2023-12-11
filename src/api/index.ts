import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import pokemonRouter from "./pokemon";
import typesRouter from "./types";
import cors from "cors";
import { pokestoreApiUrl } from "../constants";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  process.env.DATABASE_CONNECTION as string,
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

app.get("/", async (req, res) => {
  res.send({
    pokemon: `${pokestoreApiUrl}pokemon`,
    types: `${pokestoreApiUrl}types`,
  });
});

app.use("/pokemon", pokemonRouter);

app.use("/types", typesRouter);

app.listen(process.env.PORT ?? 3000);

export default app;

