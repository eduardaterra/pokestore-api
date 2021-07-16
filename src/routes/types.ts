import express from "express";
import pagination from "../services/pagination";

const typesRouter = express.Router();

typesRouter.get("/", async (req, res) => {
  const typeRoutes = {
    normal: "https://pokestore-api.herokuapp.com/types/normal",
    fighting: "https://pokestore-api.herokuapp.com/types/fighting",
    flying: "https://pokestore-api.herokuapp.com/types/flying",
    poison: "https://pokestore-api.herokuapp.com/types/poison",
    ground: "https://pokestore-api.herokuapp.com/types/ground",
    rock: "https://pokestore-api.herokuapp.com/types/rock",
    bug: "https://pokestore-api.herokuapp.com/types/bug",
    ghost: "https://pokestore-api.herokuapp.com/types/ghost",
    steel: "https://pokestore-api.herokuapp.com/types/steel",
    fire: "https://pokestore-api.herokuapp.com/types/fire",
    water: "https://pokestore-api.herokuapp.com/types/water",
    grass: "https://pokestore-api.herokuapp.com/types/grass",
    electric: "https://pokestore-api.herokuapp.com/types/electric",
    psychic: "https://pokestore-api.herokuapp.com/types/psychic",
    ice: "https://pokestore-api.herokuapp.com/types/ice",
    dragon: "https://pokestore-api.herokuapp.com/types/dragon",
    dark: "https://pokestore-api.herokuapp.com/types/dark",
    fairy: "https://pokestore-api.herokuapp.com/types/fairy",
    unknown: "https://pokestore-api.herokuapp.com/types/unknown",
    shadow: "https://pokestore-api.herokuapp.com/types/shadow",
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

  const url: string = `https://pokestore-api.herokuapp.com/types/${currentType}`;

  const order: any = req.query.order;

  res.send(await pagination(offset, limit, findParams, url, order));
});

export default typesRouter;
