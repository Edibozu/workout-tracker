const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const virtuals = { toJSON: { virtuals: true} };

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter an exercise type",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name",
          minlength: 1,
        },
        duration: {
          type: Number,
          required: "Enter an exercise duration in minutes",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
    // toJSON: {
    //   virtuals: true,
    // },
  },
  virtuals
);

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
