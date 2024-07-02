const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    // If any of body params is missing we will come inside if...
    return res.status(400).json({
      data: {},
      success: false,
      message: "Invalid request body for creating a flight.",
      err: "Missing required parameteres in order to create a flight.",
    });
  }
  next();
};

module.exports = {
  validateCreateFlight,
};