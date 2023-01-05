class crudService {
  constructor(repositroy) {
    this.repositroy = repositroy;
  }

  async create(data) {
    try {
      const response = await this.repositroy.create(data);
      return response;
    } catch (error) {
      console.log("something went wrong in the crud service layer!");
      throw { error };
    }
  }

  async destroy(data) {
    try {
      const response = await this.repositroy.destroy(id);
      return response;
    } catch (error) {
      console.log("something went wrong in the crud service layer!");
      throw { error };
    }
  }

  async get(id) {
    try {
      const response = await this.repositroy.get(id);
      return response;
    } catch (error) {
      console.log("something went wrong in the crud service layer!");
      throw { error };
    }
  }

  async getAll() {
    try {
      const response = await this.repositroy.getAll();
      return response;
    } catch (error) {
      console.log("something went wrong in the crud service layer!");
      throw { error };
    }
  }

  async update(id, data) {
    try {
      const response = await this.repositroy.update(id, data);
      return response;
    } catch (error) {
      console.log("something went wrong in the crud service layer!");
      throw { error };
    }
  }
}

module.exports = crudService;
