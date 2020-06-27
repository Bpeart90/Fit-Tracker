const router = require("express").Router();
const workout = require("../models/workout");


router.get("/api/workouts", (req, res) => {
    workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
});

router.post("/api/workouts", function (req, res) {
    workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        })
});

router.get("/api/workouts/range", function (req, res) {
    workout.create()
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
});

router.post("/api/workouts/range", function (req, res) {
    workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        })
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    workout.findByIdAndUpdate({ _id: params.id })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
});


module.export = router;