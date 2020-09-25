const { createList } = require("../../queries/lists/lists");

const lists = require("express").Router();

lists.post("/", createList);

module.exports = lists;