const { FlightService } = require("../services/index");

const flightService = new FlightService();

const createF = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      err: {},
      message: "Flight created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to create a flight",
      err: error,
    });
  }
};

module.exports = {
  createF,
};
