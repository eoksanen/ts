import express = require('express');
//import bmi = require('bmiCalculator.ts')
//const bmi = require('./exerciseCalculator.ts');
import { calculateBmi } from "./bmiCalculator";
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    
    if(req.query.height) {
        const height = req.query.height
        console.log(height)
    }
    if(req.query.weight) {
        const weight = req.query.weight
        console.log(weight)
    }
    res.json({
        weight: req.query.weight,
        height: req.query.height,
        bmi: calculateBmi(Number(req.query.height), Number(req.query.weight))

    })

});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});