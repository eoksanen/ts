import express = require('express');
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";
const app = express();

app.use(express.json())

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {

  const height = Number(req.query.height);
  const weight = Number(req.query.weight);
    
    if(height && weight) {
    res.json({
        weight: weight,
        height: height,
        bmi: calculateBmi(height, weight)
      
      });
    } else {
      res.status(400).send({ error: 'malformatted parameters' });

    }

});

app.post('/exercises', (req, res) => {
  
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const exercises = req.body;

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const answer = calculateExercises(exercises.daily_exercises, exercises.target);

    
    if(answer) {
    res.json(answer);
    } else {
      res.status(400).send({ error: 'malformatted parameters' });

    }

});


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});