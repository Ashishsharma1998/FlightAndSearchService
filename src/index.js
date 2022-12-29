const express = require("express");
const bodyparser = require("body-parser");

const cityRepository = require("./repository/city-repository");

const { PORT } = require("./config/ServerConfig");

const setAndStartServer = async () => {
  const app = express(); //create express app object

  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`server started at port ${PORT}`);
    const repo = new cityRepository();
    const val = await repo.updateCity(3, { name: "california" });
    console.log(val);
  });
};

setAndStartServer();
