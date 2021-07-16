import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import pokemonRouter from "./routes/pokemon";
import typesRouter from "./routes/types";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

console.log(process.env.DATABASE_CONNECTION);

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
    pokemon: `${process.env.APP_URL}/pokemon`,
    types: `${process.env.APP_URL}/types`,
  });
});

app.use("/pokemon", pokemonRouter);

app.use("/types", typesRouter);

app.listen(process.env.PORT || 3000);
