require('dotenv').config()
const express = require("express")
const mongose = require("mongoose")

// express app
const app = express()
const workoutRoutes = require("../backend/routes/workouts")


// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use("/api/workouts", workoutRoutes)

// connect to db
mongose.connect(process.env.MONG_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server Started At Port ${process.env.PORT}`)
    })
}).catch((err) => console.log(err))