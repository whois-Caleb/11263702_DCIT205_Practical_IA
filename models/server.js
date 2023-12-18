const express = require('express');
const mongoose = require('mongoose');
const Patient = require('./models/patientModel')
const app = express();
const port = 3000;

app.use(express.json())



app.post('/patients', async(req, res) =>{
    try {
        const patient = await Patient.create(req.body)
        res.status(200).json(patient);
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }    
})

app.get('/patients', async(req, res) => {
    try {
        const patients = await Patient.find({});
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({message: error.message})
        
    } 
})

mongoose.
connect("mongodb://localhost:27017")
.then(() => {
    console.log('Connected to database');
}).catch(() => {
    console.log(error)
})