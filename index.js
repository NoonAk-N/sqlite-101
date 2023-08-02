

//start here
import express from 'express';
import {getGreetings, addGreeting} from './db.js'

const app = express();
const PORT = process.env.PORT || 3008;

// get all the greetings
//http://localhost:3008/api/greetings
app.get('/api/greetings',  async(req,res) => {

const greetings = await getGreetings();
console.log(greetings);
res.json({
    greetings 
})
});
app.listen(PORT, () =>console.log(`start on port : ${PORT}`) )
//create a route to add a greeting  

app.post('/api/greetings',(req, res) => {
    const greeting = req.body.greeting;
    const language = req.body.language;

//
res.json({
    greetings,
    language
});


});
