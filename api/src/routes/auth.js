const express = require("express");
const router = express.Router();
const LogIn = require("./middlewares/auth/LogIn");
const Register = require("./middlewares/auth/register");
const postVerify = require("./middlewares/auth/verify");
const authorization = require("./middlewares/auth/authorization");

router.post("/login", LogIn);

router.post("/register", Register);

router.get("/", authorization, postVerify);

module.exports = router;
