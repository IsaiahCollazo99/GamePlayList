const { createList, addGameToList } = require("../../queries/lists/lists");

const lists = require("express").Router();

lists.post("/", createList);
lists.post("/:id/games", addGameToList);

module.exports = lists;