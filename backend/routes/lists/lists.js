const { createList, getList, deleteList } = require("../../queries/lists/lists");
const listGamesRouter = require("./listGames/listGames");

const lists = require("express").Router();

lists.use("/:id/games", listGamesRouter);

lists.post("/", createList);
lists.get("/:id", getList);
lists.delete("/id", deleteList);

module.exports = lists;