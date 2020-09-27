const userLists = require("express").Router({mergeParams: true});
const { getUserLists } = require("../../../queries/users/userLists/userLists");

userLists.get("/", getUserLists);

module.exports = userLists;