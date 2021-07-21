import express from "express";
import pagination from "../services/pagination";
import dotenv from "dotenv";

dotenv.config();

const typesRouter = express.Router();

typesRouter.get("/", async (req, res) => {
  const typeRoutes = {
    normal: `${process.env.APP_URL}types/normal`,
    fighting: `${process.env.APP_URL}types/fighting`,
    flying: `${process.env.APP_URL}types/flying`,
    poison: `${process.env.APP_URL}types/poison`,
    ground: `${process.env.APP_URL}types/ground`,
    rock: `${process.env.APP_URL}types/rock`,
    bug: `${process.env.APP_URL}types/bug`,
    ghost: `${process.env.APP_URL}types/ghost`,
    steel: `${process.env.APP_URL}types/steel`,
    fire: `${process.env.APP_URL}types/fire`,
    water: `${process.env.APP_URL}types/water`,
    grass: `${process.env.APP_URL}types/grass`,
    electric: `${process.env.APP_URL}types/electric`,
    psychic: `${process.env.APP_URL}types/psychic`,
    ice: `${process.env.APP_URL}types/ice`,
    dragon: `${process.env.APP_URL}types/dragon`,
    dark: `${process.env.APP_URL}types/dark`,
    fairy: `${process.env.APP_URL}types/fairy`,
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

  const url: string = `${process.env.APP_URL}types/${currentType}`;

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

  const url: string = `${process.env.APP_URL}types/${currentType}/pokemon/${currentNameOrKey}`;

  const order: any = req.query.order;

  res.send(await pagination(offset, limit, findParams, url, order));
});

export default typesRouter;
