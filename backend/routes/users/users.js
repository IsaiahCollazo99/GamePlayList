const users = require("express").Router();
const { 
    signUp,
    getUserByEmail
} = require("../../queries/users/users");
const userLists = require("./userLists/userLists");

users.use("/:id/lists", userLists);

users.post("/", signUp);
users.post("/email", getUserByEmail);

module.exports = users;