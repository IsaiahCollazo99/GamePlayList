const listGames = require("express").Router({mergeParams: true});
const { getListGames } = require("../../../queries/lists/listGames/listGames");
const { addGameToList, getGameFromList } = require("../../../queries/lists/lists");

listGames.get("/", getListGames);
listGames.post("/:id/games", addGameToList);
listGames.get("/:id/games/:game_id", getGameFromList);

module.exports = listGames;