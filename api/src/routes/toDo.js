const express = require("express");
const router = express.Router();
const deleteToDo = require("./middlewares/toDo/deleteToDo");
const putToDo = require("./middlewares/toDo/putToDo");
const postToDo = require("./middlewares/toDo/postToDo");
const patchToDoStatus = require("./middlewares/toDo/patchToDo");
const getToDo = require("./middlewares/toDo/getToDo");
const authorization = require("./middlewares/auth/authorization");

router.post("/", authorization, postToDo);

router.patch("/", authorization, patchToDoStatus);

router.put("/title", authorization, putToDo);

router.delete("/:id", authorization, deleteToDo);

router.get("/", authorization, getToDo);

module.exports = router;
