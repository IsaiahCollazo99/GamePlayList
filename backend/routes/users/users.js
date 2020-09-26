const users = require("express").Router();
const { 
    signUp,
    getUserByEmail,
    getUserByUsername
} = require("../../queries/users/users");
const userLists = require("./userLists/userLists");

users.use("/:id/lists", userLists);

users.post("/", signUp);
users.post("/email", getUserByEmail);
users.get("/username/:username", getUserByUsername);

module.exports = users;