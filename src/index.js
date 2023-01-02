const express = require("express");
const bodyparser = require("body-parser");

const apiRoutes = require("./routes/index");
const { PORT } = require("./config/ServerConfig");

const { Airport, City } = require("./models/index");
const db = require("./models/index");
const city = require("./models/city");

const setAndStartServer = async () => {
  const app = express(); //create express app object

  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`server started at port ${PORT}`);

    if (process.env.SYNC_DB) {
      await db.sequelize.sync({ alter: true });
    }

    // const city = await City.findOne({
    //   where: {
    //     id: 9,
    //   },
    // });

    // const airports = await city.getAirports();
    // console.log(city, airports);

    // const newAirport = await Airport.findOne({
    //   where: {
    //     id: 9,
    //   },
    // });

    // await city.addAirport(newAirport);
  });
};

setAndStartServer();
