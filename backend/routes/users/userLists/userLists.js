const userLists = require("express").Router();
const { getUserLists } = require("../../../queries/users/userLists/userLists");


userLists.get("/", getUserLists);

module.exports = userLists;