const users = require("express").Router();
const { 
    signUp,
    getUserByEmail,
    getUserByUsername,
    getUserById
} = require("../../queries/users/users");
const userListsRouter = require("./userLists/userLists");

users.use("/:id/lists", userListsRouter);

users.post("/", signUp);
users.post("/email", getUserByEmail);
users.get("/username/:username", getUserByUsername);
users.get("/:id", getUserById);

module.exports = users;