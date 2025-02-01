const express = require ("express");
const router = express.Router();
const eventsController = require ("../controllers/eventsController");


router.post("/", eventsController.postEvent);
router.get("/", eventsController.getEvents);
router.put("/:id", eventsController.putEvent);
router.delete("/:id",eventsController.deteleEvent);

module.exports = router;