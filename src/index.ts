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
    } else {
      console.log("connected to db");
    }
  }
);

app.get("/", async (req, res) => {
  res.send({
    pokemon: "http://localhost:3000/pokemon",
    types: "http://localhost:3000/types",
  });
});

app.use("/pokemon", pokemonRouter);

app.use("/types", typesRouter);

app.listen(3000, () => console.log("Server started at port 3000"));
