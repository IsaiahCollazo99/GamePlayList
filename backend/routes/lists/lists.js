const { createList, addGameToList, getGameFromList } = require("../../queries/lists/lists");

const lists = require("express").Router();

lists.post("/", createList);
lists.post("/:id/games", addGameToList);
lists.get("/:id/games/:game_id", getGameFromList);

module.exports = lists;