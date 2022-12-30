const { City } = require("../models/index");

class cityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("something went wrong wrong in the  repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong wrong in the  repository layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      //the below approach also wroks but will not return updated object but  if we use pg then returing:true can be used else not
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });
      //this below approach can be used instead above one to get updated object in mysql
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("something went wrong wrong in the  repository layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong wrong in the  repository layer");
      throw { error };
    }
  }
}

module.exports = cityRepository;
