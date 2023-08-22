let Excersise = require("../models/excersise.model")

// get excersices
const getExcersices = (req,res)=>{
    Excersise.find()
    .then(excersise => res.json(excersise))
    .catch(err => res.status(400).json("Error : "+ err))
}

// get excersices by id
const getExcersicesById = (req, res) =>{
    Excersise.findById(req.params.id)
    .then(excersise => res.json(excersise))
    .catch(err => res.status(400).json(err))
}

// delete excersices by id
const deleteExcersiesById = (req, res) =>{
    Excersise.findByIdAndDelete(req.params.id)
    .then(()=>res.json("deleted Successfully"))
    .catch(err => res.status(400).json(err))
}

// add new excersices 
const addNewExcersies =(req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExcersise = new Excersise({
        username,description,duration,date
    })

    newExcersise.save()
    .then(()=> res.json("Excersise Added"))
    .catch(err => res.status(400).json("Error : "+ err))
}

// update excersices by id
const updateExcersiseById = (req,res)=>{
    Excersise.findById(req.params.id)
    .then(excersise => {
        excersise.username = req.body.username;
        excersise.password = req.body.password;
        excersise.duration = Number(req.body.duration);
        excersise.date = Date.parse(req.body.date);
        excersise.save()
    })

    .then(()=>res.json("succefully updated"))
    .catch(err => res.json(err))
}

module.exports = {getExcersices , getExcersicesById , deleteExcersiesById , addNewExcersies , updateExcersiseById}