const path = require("path");
const db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((foundWorkouts) => {
        res.json(foundWorkouts);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          data: null,
          message: "Failed to retrieve workouts",
        });
      });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then((newWorkout) => {
        res.json(newWorkout);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          data: null,
          message: "Failed to create new workout",
        });
      });
  });
};
