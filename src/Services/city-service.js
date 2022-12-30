const { cityRepository } = require("../repository/index");

class cityService {
  constructor() {
    this.cityRepository = new cityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await this.cityRepository.deleteCity(cityId);
      return true;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      const cities = await this.cityRepository.getAllCities({
        name: filter.name,
      });
      return cities;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }
}

module.exports = cityService;
