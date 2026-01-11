const express = require("express")
const Workout = require("../models/workout")
const router = express.Router()

// get all workouts
router.get("/", async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({ createdAt: -1 })
        res.status(200).json(workouts)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


//get a single workouts
router.get("/:id", async(req, res) => {
    try {
        const singleworkout = await Workout.findById(req.params.id)
        res.status(200).json(singleworkout)
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
})

// post all workouts
router.post("/", async (req, res) => {
    const { title, load, reps } = req.body
    console.log(req)
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

//gelete a single workouts
router.delete("/:id", async(req, res) => {
    try {
        const singleworkout = await Workout.findByIdAndDelete(req.params.id)
        if(singleworkout){
            res.status(200).json("workout deleted successfully")
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
        
    }
})

module.exports = router