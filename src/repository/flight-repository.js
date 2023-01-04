const { Flight, sequelize } = require("../models/index");
const { Op } = require("sequelize");

class flightRepository {
  #createFilter(data) {
    const filter = {};
    if (data.arrivalAirportId)
      Object.assign(filter, { arrivalAirportId: data.arrivalAirportId });
    if (data.departureAirportId)
      Object.assign(filter, { departureAirportId: data.departureAirportId });

    // if (data.maxPrice && data.minPrice) {
    //   Object.assign(filter, {
    //     [Op.and]: [
    //       {
    //         price: { [Op.lte]: data.maxPrice },
    //       },
    //       {
    //         price: { [Op.gte]: data.minPrice },
    //       },
    //     ],
    //   });
    // }
    let pricefilter = [];
    if (data.maxPrice) {
      // Object.assign(filter, {
      //   price: { [Op.lte]: data.maxPrice },
      // });
      pricefilter.push({ price: { [Op.lte]: data.maxPrice } });
    }

    if (data.minPrice) {
      // Object.assign(filter, {
      //   price: { [Op.gte]: data.minPrice },
      // });
      pricefilter.push({ price: { [Op.gte]: data.minPrice } });
    }
    Object.assign(filter, { [Op.and]: pricefilter });
    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (error) {
      console.log("something went wrong wrong in the  repository layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flight.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong wrong in the  repository layer");
      throw { error };
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObj = this.#createFilter(filter);
      const flights = await Flight.findAll({
        where: filterObj,
      });
      return flights;
    } catch (error) {
      console.log("something went wrong wrong in the  repository layer");
      throw { error };
    }
  }
}

module.exports = flightRepository;
