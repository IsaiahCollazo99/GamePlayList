const listGames = require("express").Router({mergeParams: true});
const { getListGames, removeGameFromList } = require("../../../queries/lists/listGames/listGames");
const { addGameToList, getGameFromList } = require("../../../queries/lists/lists");

listGames.get("/", getListGames);
listGames.post("/", addGameToList);
listGames.get("/:game_id", getGameFromList);
listGames.delete('/:game_id', removeGameFromList);

module.exports = listGames;