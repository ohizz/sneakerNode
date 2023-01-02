const express = require('express');
const Model = require('../model.js/model');
const router = express.Router();

// router.post('/sneaker', (req, res) => {
//     res.send('Post API')
// })


router.get('/', async (req, res) => {
    try{
        const sneaker = await Model.find();
        res.json(sneaker)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


module.exports = router;