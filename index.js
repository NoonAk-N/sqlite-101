import { addGreeting, getGreetings } from './db.js'

import express from 'express';
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3008;

app.get('/api/greetings', async (req, res) => {

    const greetings = await getGreetings();
    console.log(greetings);
    res.json({
        greetings
    })
});

app.post('/api/greetings', async (req, res) => {
    const greeting = req.body.greeting;
    const language = req.body.language;

    await addGreeting(language, greeting)

    res.json({
        status: 'success',
        message: `Added a greeting for ${language},`

    });
});


app.listen(PORT, () => console.log(`started on port: ${PORT}`))

console.log('start')





//console.log('end')