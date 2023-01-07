const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const route = require('./routes/routes');
// const cors = require('cors');
const bodyparser = require('body-parser');
mongoose.set('strictQuery', false);

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

const app = express();
const port = process.env.PORT || 8080;

// app.use(cors());
app.use(express.json());
app.use('/sneakers', route);
app.use(bodyparser.json());

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(port, () => {
    console.log(`server is up ${port}`)
})