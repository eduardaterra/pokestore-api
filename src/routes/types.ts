import express from "express";
import pagination from "../services/pagination";

const typesRouter = express.Router();

typesRouter.get("/", async (req, res) => {
  const typeRoutes = {
    normal: "http://localhost:3000/types/normal",
    fighting: "http://localhost:3000/types/fighting",
    flying: "http://localhost:3000/types/flying",
    poison: "http://localhost:3000/types/poison",
    ground: "http://localhost:3000/types/ground",
    rock: "http://localhost:3000/types/rock",
    bug: "http://localhost:3000/types/bug",
    ghost: "http://localhost:3000/types/ghost",
    steel: "http://localhost:3000/types/steel",
    fire: "http://localhost:3000/types/fire",
    water: "http://localhost:3000/types/water",
    grass: "http://localhost:3000/types/grass",
    electric: "http://localhost:3000/types/electric",
    psychic: "http://localhost:3000/types/psychic",
    ice: "http://localhost:3000/types/ice",
    dragon: "http://localhost:3000/types/dragon",
    dark: "http://localhost:3000/types/dark",
    fairy: "http://localhost:3000/types/fairy",
    unknown: "http://localhost:3000/types/unknown",
    shadow: "http://localhost:3000/types/shadow",
  };

  const countRoutes = Object.keys(typeRoutes).length;

  res.send({ count: countRoutes, routes: typeRoutes });
});

typesRouter.get("/:type", async (req, res) => {
  const offset: number = isNaN(Number(req.query.offset))
    ? 0
    : Number(req.query.offset);
  const limit: number = isNaN(Number(req.query.limit))
    ? 20
    : Number(req.query.limit);

  const currentType = req.params.type;

  const findParams: any = { types: { $in: [currentType] } };

  const url: string = `http://localhost:3000/types/${currentType}`;

  const order: any = req.query.order;

  res.send(await pagination(offset, limit, findParams, url, order));
});

export default typesRouter;
