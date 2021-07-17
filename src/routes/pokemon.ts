import express from "express";
import pagination from "../services/pagination";
import dotenv from "dotenv";

dotenv.config();

const pokemonRouter = express.Router();

pokemonRouter.get("/", async (req, res) => {
  const offset: number = isNaN(Number(req.query.offset))
    ? 0
    : Number(req.query.offset);
  const limit: number = isNaN(Number(req.query.limit))
    ? 20
    : Number(req.query.limit);
  const findParams: any = null;
  const url: string = `${process.env.APP_URL}pokemon`;
  const order: any = req.query.order;

  res.send(await pagination(offset, limit, findParams, url, order));
});

pokemonRouter.get("/:nameOrKey", async (req, res) => {
  const offset: number = isNaN(Number(req.query.offset))
    ? 0
    : Number(req.query.offset);
  const limit: number = isNaN(Number(req.query.limit))
    ? 20
    : Number(req.query.limit);

  const findParams = isNaN(Number(req.params.nameOrKey))
    ? {
        name: { $regex: new RegExp(req.params.nameOrKey), $options: "i" },
      }
    : { key: req.params.nameOrKey };
  const url: string = `${process.env.APP_URL}${req.params.nameOrKey}`;
  const order: any = req.query.order;

  res.send(await pagination(offset, limit, findParams, url, order));
});

export default pokemonRouter;
