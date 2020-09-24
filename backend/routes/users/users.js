const users = require("express").Router();
const { 
    signUp 
} = require("../../queries/users/users");

users.post("/", signUp);

module.exports = users;