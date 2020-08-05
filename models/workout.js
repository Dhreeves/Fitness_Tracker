//jshint esversion:6

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Cardio or Resistance?"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter a specific exercise."
            },
            duration: {
                type: Number,
                required: "How many minutes of exercise?"
            },
            weight: {
                type: Number,
                default: 0
            },
            reps: {
                type: Number,
                default: 0
            },
            sets: {
                type: Number,
                default: 0
            },
            distance: {
                type: Number,
                default: 0

            }
        }
    ]
},

    {
        toJSON: {
            virtuals: true
        }
    }
);
workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
