const express = require("express");

const Workout = require("../models/workoutModel");

const router = express.Router();

// .....................Require Controller..............
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  editWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

// ............Get entire records...........

router.get("/", getWorkouts);

// ...............Get single record..............

router.get("/:id", getWorkout);

//................. Create Record................
router.post("/", createWorkout);
// ................update Record.................
router.patch("/:id", editWorkout);

// .................Delete Record...............
router.delete("/:id", deleteWorkout);

module.exports = router;
