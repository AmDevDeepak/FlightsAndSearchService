const { SuccessCodes } = require("../utils/error-codes");
const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(SuccessCodes.CREATED).json({
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

const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlightData(req.query);
    return res.status(SuccessCodes.SUCCESS).json({
      data: response,
      success: true,
      err: {},
      message: "Flight fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch all flights",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await flightService.getFlight(req.params.id);
    return res.status(SuccessCodes.SUCCESS).json({
      data: response,
      success: true,
      err: {},
      message: "Flight fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch the flight",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await flightService.updateFlight(req.params.id, req.body);
    return res.status(SuccessCodes.SUCCESS).json({
      data: response,
      success: true,
      err: {},
      message: "Flight updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to update the flight",
      err: error,
    });
  }
};
module.exports = {
  create,
  getAll,
  get,
  update,
};
