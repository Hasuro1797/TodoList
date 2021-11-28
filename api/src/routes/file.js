const express = require("express");
const router = express.Router();
const deleteFile = require("./middlewares/file/deleteFile");
const putFile = require("./middlewares/file/putFile");
const postFile = require("./middlewares/file/postFile");
const getFile = require("./middlewares/file/getFile");
const authorization = require("./middlewares/auth/authorization");

router.post("/", authorization, postFile);

router.put("/", authorization, putFile);

router.delete("/:id", authorization, deleteFile);

router.get("/", authorization, getFile);

module.exports = router;
