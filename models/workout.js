const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    exercise: [
        {
            type: {
                type: String,
                trim: true,
                required: "an exercise must be selected?",
            },
            name: {
                type: String,
                trim: true,
                required: "what is the name of the exercise?",
            },
            duration: {
                type: Number,
                required: true,
            },
            weight: {
                type: Number,
                required: true,
            },
            reps: {
                type: Number,
                required: true,
            },
            sets: {
                type: Number,
                required: true,
            },
            distance: {
                type: Number,
                required: true,
            },
        },
    ],
});

const workout = mongoose.model("exercise", exerciseSchema);

module.exports = workout;