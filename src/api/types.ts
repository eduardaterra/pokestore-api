import express from "express";
import pagination from "../services/pagination";
import dotenv from "dotenv";
import { pokestoreApiUrl } from "../constants";

dotenv.config();

const typesRouter = express.Router();

typesRouter.get("/", async (req, res) => {
  const typeRoutes = {
    normal: `${pokestoreApiUrl}types/normal`,
    fighting: `${pokestoreApiUrl}types/fighting`,
    flying: `${pokestoreApiUrl}types/flying`,
    poison: `${pokestoreApiUrl}types/poison`,
    ground: `${pokestoreApiUrl}types/ground`,
    rock: `${pokestoreApiUrl}types/rock`,
    bug: `${pokestoreApiUrl}types/bug`,
    ghost: `${pokestoreApiUrl}types/ghost`,
    steel: `${pokestoreApiUrl}types/steel`,
    fire: `${pokestoreApiUrl}types/fire`,
    water: `${pokestoreApiUrl}types/water`,
    grass: `${pokestoreApiUrl}types/grass`,
    electric: `${pokestoreApiUrl}types/electric`,
    psychic: `${pokestoreApiUrl}types/psychic`,
    ice: `${pokestoreApiUrl}types/ice`,
    dragon: `${pokestoreApiUrl}types/dragon`,
    dark: `${pokestoreApiUrl}types/dark`,
    fairy: `${pokestoreApiUrl}types/fairy`,
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

  const url: string = `${pokestoreApiUrl}types/${currentType}`;

  const order: any = req.query.order;

  res.send(await pagination(offset, limit, findParams, url, order));
});

typesRouter.get("/:type/pokemon/:nameOrKey", async (req, res) => {
  const offset: number = isNaN(Number(req.query.offset))
    ? 0
    : Number(req.query.offset);
  const limit: number = isNaN(Number(req.query.limit))
    ? 20
    : Number(req.query.limit);

  const currentType = req.params.type;

  const currentNameOrKey =
    req.params.nameOrKey === undefined ? null : req.params.nameOrKey;

  const findSecondParams: any =
    currentNameOrKey !== null
      ? isNaN(Number(currentNameOrKey))
        ? {
            name: { $regex: new RegExp(currentNameOrKey), $options: "i" },
          }
        : { key: currentNameOrKey }
      : null;

  const findParams: any = {
    types: { $in: [currentType] },
    ...findSecondParams,
  };

  const url: string = `${pokestoreApiUrl}types/${currentType}/pokemon/${currentNameOrKey}`;

  const order: any = req.query.order;

  res.send(await pagination(offset, limit, findParams, url, order));
});

export default typesRouter;

