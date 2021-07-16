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
  const url: string = "https://pokestore-api.herokuapp.com/pokemon/";
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
  const url: string = `https://pokestore-api.herokuapp.com/${req.params.name}`;
  const order: any = req.query.order;

  res.send(await pagination(offset, limit, findParams, url, order));
});

export default pokemonRouter;
