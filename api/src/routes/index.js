const { Router } = require("express");
const auth = require("./auth");
const toDo = require("./toDo");
const file = require("./file");
const router = Router();

router.use("/auth", auth);
router.use("/todo", toDo);
router.use("/file", file);

module.exports = router;
