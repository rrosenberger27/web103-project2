const { eventsController } = require("../controllers/events");
const express = require("express");

const eventRouter = express.Router();

eventRouter.get("/", eventsController.getAllEvents);
eventRouter.get("/:id", eventsController.getEventById);
eventRouter.get("/stadium/:stadium_id", eventsController.getEventsByStadium);
eventRouter.post("/", eventsController.createEvent);

module.exports = eventRouter;