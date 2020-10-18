const { createList, addGameToList, getGameFromList, getList } = require("../../queries/lists/lists");

const lists = require("express").Router();

lists.post("/", createList);
lists.post("/:id/games", addGameToList);
lists.get("/:id/games/:game_id", getGameFromList);
lists.get("/:id", getList);

module.exports = lists;