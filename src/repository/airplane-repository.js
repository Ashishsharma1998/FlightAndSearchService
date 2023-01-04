const { Airplane } = require("../models/index");

class airplaneRepository {
  async getAirplane(id) {
    try {
      const airplane = await Airplane.findByPk(id);
      return airplane;
    } catch (error) {
      console.log("something went wrong wrong in the  repository layer");
      throw { error };
    }
  }
}

module.exports = airplaneRepository;
