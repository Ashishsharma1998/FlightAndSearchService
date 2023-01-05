const { airportService } = require("../Services/index");

const AirportService = new airportService();

const create = async (req, res) => {
  try {
    const response = await AirportService.create(req.body);
    return res.status(201).json({
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
