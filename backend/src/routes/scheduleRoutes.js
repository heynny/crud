const express = require ("express");
const router = express.Router();
const scheduleController = require ("../controllers/scheduleController");


router.post("/", scheduleController.postSchedule);
router.get("/", scheduleController.getSchedule);
router.put("/:id", scheduleController.updateSchedule);
router.delete("/:id",scheduleController.deleteSchedule);

module.exports = router;