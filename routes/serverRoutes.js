const express = require("express");
const serVerControllers = require("../controllers/serVerControllers");

const router = express.Router();

router.post("/", serVerControllers.update);

router.put("/:id ", serVerControllers.create)

module.exports = router;
