const express = require("express");
const router = express.Router();

const cityController = require("../../controllers/city-controller");
const flightController = require("../../controllers/flight-controller");
const airportcontroller = require("../../controllers/airport-controller");
router.post("/city", cityController.create);
router.delete("/city/:id", cityController.destroy);
router.patch("/city/:id", cityController.update);
router.get("/city/:id", cityController.get);
router.get("/city", cityController.getAll);

router.post("/flights", flightController.create);
router.get("/flights/:id", flightController.get);
router.get("/flights", flightController.getAll);

router.post("/airports", airportcontroller.create);

module.exports = router;
