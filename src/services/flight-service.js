const {
  FlightRepository,
  AirplaneRepository,
} = require("../respository/index");
const { comapareTime } = require("../utils/helper");
class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
    try {
      if (!comapareTime(data.arrivalTime, data.departureTime)) {
        throw {
          error: "Departure Time could not be greater than arrival time.",
        };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }

  async getAllFlightData(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }
}

module.exports = FlightService;
