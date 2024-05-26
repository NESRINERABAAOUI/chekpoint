const express = require("express");

const router = express.Router();

const browse = require("../../../controllers/programmeAction");

router.get("/", browse);