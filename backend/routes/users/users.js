const users = require("express").Router();
const { 
    signUp 
} = require("../../queries/users/users");
const userLists = require("./userLists/userLists");

users.use("/:id/lists", userLists);

users.post("/", signUp);

module.exports = users;