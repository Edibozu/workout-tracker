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

  app.put("/api/workouts/:id", (req, res) => {
    db.Workouts.findByIdUpdate(req.params.id, req.body, {
      $push: { exercises: req.body },
    })
      .then((updatedWorkouts) => {
        res.json(updatedWorkouts);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          data: null,
          message: "Failed to update workout",
        });
      });
  });
};
