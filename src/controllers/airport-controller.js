const { airportService } = require("../Services/index");
const { successCodes } = require("../utils/error-code");

const AirportService = new airportService();

const create = async (req, res) => {
  try {
    const response = await AirportService.create(req.body);
    return res.status(successCodes.CREATED).json({
      data: response,
      success: true,
      message: "successfully created a airport",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: true,
      message: "successfully created a airport",
      err: { error },
    });
  }
};

module.exports = {
  create,
};
