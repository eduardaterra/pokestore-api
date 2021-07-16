import { model, Schema } from "mongoose";

type PokemonType = {
  name: string;
  types: string[];
  base_experience: number;
  key: number;
  height: number;
  weight: number;
  price: number;
  sprite: string;
};

const PokemonSchema = new Schema<PokemonType>({
  name: {
    type: String,
  },
  types: {
    type: Array,
  },
  base_experience: {
    type: Number,
  },
  key: {
    type: Number,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  price: {
    type: Number,
  },
  sprite: {
    type: String,
  },
});
const Pokemon = model<PokemonType>("Pokemon", PokemonSchema);

export default Pokemon;
