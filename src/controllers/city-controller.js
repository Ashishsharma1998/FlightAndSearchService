const { cityService } = require("../Services/index");

const CityService = new cityService();

// Post -- create,
// get -- Read,
// patch/put -- UPDATE
// delete -- delete

const create = async (req, res) => {
  try {
    const city = await CityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to creat a city",
      err: error,
    });
  }
};

// delete -- /city/:Id

const destroy = async (req, res) => {
  try {
    const response = await CityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a city",
      err: error,
    });
  }
};

//  patch-- /city/:id
const update = async (req, res) => {
  try {
    const response = await CityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully updated a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a city",
      err: error,
    });
  }
};

// get -- /city/:id
const get = async (req, res) => {
  try {
    const city = await CityService.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "successfully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch a city",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
};