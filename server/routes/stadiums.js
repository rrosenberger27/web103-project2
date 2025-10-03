const { stadiumsController } = require("../controllers/stadiums");
const express = require("express");

const stadiumRouter = express.Router();

stadiumRouter.get("/", stadiumsController.getAllStadiums);
stadiumRouter.get("/:id", stadiumsController.getStadiumById);

module.exports = stadiumRouter;