const crudRepository = require("./crud-repository");
const { Airport } = require("../models/index");

class airportRepository extends crudRepository {
  constructor() {
    super(Airport);
  }
}

module.exports = airportRepository;
