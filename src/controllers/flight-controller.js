const { flightService } = require("../Services/index");
const { successCodes } = require("../utils/error-code");

const FlightService = new flightService();

const create = async (req, res) => {
  try {
    let flightRequestData = ({
      flightNumber,
      airplaneId,
      arrivalAirportId,
      departureAirportId,
      price,
      arrivalTime,
      departureTime,
    } = req.body);

    const flight = await FlightService.createFlight(flightRequestData);
    return res.status(successCodes.CREATED).json({
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
    return res.status(successCodes.OK).json({
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
    return res.status(successCodes.OK).json({
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

const update = async (req, res) => {
  try {
    const response = await FlightService.updateFlight(req.params.id, req.body);
    return res.status(successCodes.OK).json({
      data: response,
      success: true,
      message: "successfully updated a flight",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a flight",
      err: error,
    });
  }
};

module.exports = {
  create,
  get,
  getAll,
  update,
};
