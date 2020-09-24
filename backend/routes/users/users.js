const usersRouter = require("express").Router();
const { 
    signUp 
} = require("../../queries/users/users");

usersRouter.post("/", signUp);