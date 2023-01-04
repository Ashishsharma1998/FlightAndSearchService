const { flightService } = require("../Services/index");

const FlightService = new flightService();

const create = async (req, res) => {
  try {
    const flight = await FlightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "successfully created a flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to creat a flight",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const flight = await FlightService.getFlight(req.params.id);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "successfully fetched a flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch a flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flights = await FlightService.getAllFlights(req.query);
    return res.status(201).json({
      data: flights,
      success: true,
      message: "successfully fetched all flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetched all flight",
      err: error,
    });
  }
};

module.exports = {
  create,
  get,
  getAll,
};
