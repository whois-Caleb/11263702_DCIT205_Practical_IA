const {MongoClient} = require ('mongodb')
const express = require('express');
const mongoose = require('mongoose');
const Patient = require('./models/patientModel')
const app = express();
const url = "mongodb+srv://dcit205.ojk2pyf.mongodb.net/";

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

mongoose.
connect("mongodb+srv://calebmawusi:tsIsavj9SSkK74Dy@dcit205.ojk2pyf.mongodb.net/")
.then(() => {
    console.log('Connected to database');
}).catch(() => {
    console.log(error)
})