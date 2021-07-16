import express from "express";
import pagination from "../services/pagination";

const pokemonRouter = express.Router();

pokemonRouter.get("/", async (req, res) => {
  const offset: number = isNaN(Number(req.query.offset))
    ? 0
    : Number(req.query.offset);
  const limit: number = isNaN(Number(req.query.limit))
    ? 20
    : Number(req.query.limit);
  const findParams: any = null;
  const url: string = "http://localhost:3000/pokemon/";
  const order: any = req.query.order;

  res.send(await pagination(offset, limit, findParams, url, order));
});

pokemonRouter.get("/:name", async (req, res) => {
  const offset: number = isNaN(Number(req.query.offset))
    ? 0
    : Number(req.query.offset);
  const limit: number = isNaN(Number(req.query.limit))
    ? 20
    : Number(req.query.limit);

  const findParams = {
    name: { $regex: new RegExp(req.params.name), $options: "i" },
  };
  const url: string = `http://localhost:3000/pokemon/${req.params.name}`;
  const order: any = req.query.order;

  res.send(await pagination(offset, limit, findParams, url, order));
});

export default pokemonRouter;
