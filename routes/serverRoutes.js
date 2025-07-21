const express = require("express");
<<<<<<< HEAD
const serverControllers = require("../controllers/serverControllers");
const { SerVerSchema } = require("../validations/serverValidations");
const validate = require("../middlewares/validate");

const router = express.Router();

router.post("/", validate(SerVerSchema), serverControllers.create);

router.put("/:id", validate(SerVerSchema), serverControllers.update);
=======
const serVerControllers = require("../controllers/serVerControllers");

const router = express.Router();

router.post("/", serVerControllers.update);

router.put("/:id ", serVerControllers.create)
>>>>>>> 4a84e5d6f8dc1a932bd3935fffc04a7ac76c31a8

module.exports = router;
