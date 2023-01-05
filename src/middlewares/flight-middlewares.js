const { clientErrorCodes } = require("../utils/error-code");

const validateCreateFlightRequest = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.arrivalAirportId ||
    !req.body.departureAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    return res.status(clientErrorCodes.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "Not a correct flight creation request",
      err: "Missing some Parameter in flight creation",
    });
  }
  next();
};

module.exports = {
  validateCreateFlightRequest,
};
