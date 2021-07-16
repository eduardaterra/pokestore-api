import Pokemon from "../models/Pokemon";

const pagination = async (
  offset: number,
  limit: number,
  findParams: any,
  url: string,
  order: string | undefined
) => {
  const orderApi = order === undefined ? "key" : order;

  const result = await Pokemon.find(findParams)
    .skip(offset)
    .limit(limit)
    .sort(orderApi);

  const countAllPokemon = await Pokemon.find(findParams).count();

  const nextPage =
    offset === countAllPokemon || offset + limit >= countAllPokemon
      ? null
      : `${url}?offset=${offset + limit}&limit=${limit}&order=${orderApi}`;

  const previousPage =
    offset === 0 || offset - limit < 0
      ? null
      : `${url}?offset=${offset - limit}&limit=${limit}&order=${orderApi}`;

  const pageInfo =
    orderApi === "key"
      ? {
          count: countAllPokemon,
          previous: previousPage,
          next: nextPage,
          orderByName: `${url}?offset=${offset}&limit=${limit}&order=name`,
          results: result,
        }
      : {
          count: countAllPokemon,
          previous: previousPage,
          next: nextPage,
          orderByKey: `${url}?offset=${offset}&limit=${limit}&order=key`,
          results: result,
        };

  return pageInfo;
};

export default pagination;
