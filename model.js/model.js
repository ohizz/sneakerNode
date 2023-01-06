const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
   brand : String,
   name : String,
   image: String,
   price: String,
   year : Number
   
})


// const dataSchema = new mongoose.Schema({
//     name: {
//         required: true,
//         type: String
//     },
//     age: {
//         required: true,
//         type: Number
//     }
// })

module.exports = mongoose.model('Data', dataSchema)