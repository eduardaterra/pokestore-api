import express from "express";
import pagination from "../services/pagination";
import dotenv from "dotenv";

dotenv.config();

const typesRouter = express.Router();

typesRouter.get("/", async (req, res) => {
  const typeRoutes = {
    normal: `${process.env.APP_URL}com/types/normal`,
    fighting: `${process.env.APP_URL}com/types/fighting`,
    flying: `${process.env.APP_URL}com/types/flying`,
    poison: `${process.env.APP_URL}com/types/poison`,
    ground: `${process.env.APP_URL}com/types/ground`,
    rock: `${process.env.APP_URL}com/types/rock`,
    bug: `${process.env.APP_URL}com/types/bug`,
    ghost: `${process.env.APP_URL}com/types/ghost`,
    steel: `${process.env.APP_URL}com/types/steel`,
    fire: `${process.env.APP_URL}com/types/fire`,
    water: `${process.env.APP_URL}com/types/water`,
    grass: `${process.env.APP_URL}com/types/grass`,
    electric: `${process.env.APP_URL}com/types/electric`,
    psychic: `${process.env.APP_URL}com/types/psychic`,
    ice: `${process.env.APP_URL}com/types/ice`,
    dragon: `${process.env.APP_URL}com/types/dragon`,
    dark: `${process.env.APP_URL}com/types/dark`,
    fairy: `${process.env.APP_URL}com/types/fairy`,
    unknown: `${process.env.APP_URL}com/types/unknown`,
    shadow: `${process.env.APP_URL}com/types/shadow`,
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
