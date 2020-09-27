const users = require("express").Router();
const { 
    signUp,
    getUserByEmail,
    getUserByUsername,
    getUserById
} = require("../../queries/users/users");
const userLists = require("./userLists/userLists");

users.use("/:id/lists", userLists);

users.post("/", signUp);
users.post("/email", getUserByEmail);
users.get("/username/:username", getUserByUsername);
users.get("/:id", getUserById);

module.exports = users;