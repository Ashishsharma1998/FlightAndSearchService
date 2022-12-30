const express = require("express");
const bodyparser = require("body-parser");

const apiRoutes = require("./routes/index");
const { PORT } = require("./config/ServerConfig");

const setAndStartServer = async () => {
  const app = express(); //create express app object

  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
  });
};

setAndStartServer();
