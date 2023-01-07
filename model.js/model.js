const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
   brand : String,
   name : String,
   image: String,
   price: String,
   year : Number
   
})

module.exports = mongoose.model('Data', dataSchema)