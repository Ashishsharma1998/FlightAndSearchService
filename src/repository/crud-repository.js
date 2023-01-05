class crudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log("something went wrong in crud repository layer!");
      throw { error };
    }
  }

  async destroy(dataId) {
    try {
      await this.model.destroy({
        where: {
          id: dataId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in crud repository layer!");
      throw { error };
    }
  }

  async get(dataId) {
    try {
      const response = await this.model.findByPk(dataId);
      return response;
    } catch (error) {
      console.log("something went wrong in crud repository layer!");
      throw { error };
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      console.log("something went wrong in crud repository layer!");
      throw { error };
    }
  }

  async update(dataId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: dataId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in crud repository layer!");
      throw { error };
    }
  }
}

module.exports = crudRepository;
