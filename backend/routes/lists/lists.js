const { createList, getList } = require("../../queries/lists/lists");
const listGamesRouter = require("./listGames/listGames");

const lists = require("express").Router();

lists.use("/:id/games", listGamesRouter);

lists.post("/", createList);
lists.get("/:id", getList);

module.exports = lists;