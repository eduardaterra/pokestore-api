"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PokemonSchema = new mongoose_1.Schema({
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
var Pokemon = mongoose_1.model("Pokemon", PokemonSchema);
exports.default = Pokemon;
