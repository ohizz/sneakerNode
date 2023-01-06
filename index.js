const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/routes');
// const cors = require('cors');
const bodyparser = require('body-parser');

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

const app = express();

// app.use(cors());
app.use(bodyparser.json());
app.use('/api', routes);
app.use(express.json());

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(8080, () => {
    console.log(`server is up ${8080}`)
})