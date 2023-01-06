const express = require('express');
const Model = require('../model.js/model');
const router = express.Router();

// router.get('/', async (req, res) => {
//  try{
//   const sneaker = await Model.find();
//   res.status(200).json(sneaker)
//  }
//  catch(error){
//   res.status(500).json({message: error.message})
//  }
// })
 
router.post('/post', async(req, res) => {
    const data = new Model({
        brand: req.body.brand,
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        year: req.body.year

    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.delete('/delete/:id', async (req, res) => {
 try{
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id)
    res.send(`${data.name} has been delete`);
 }
 catch(error){
    res.status(400).json({msg: error.message})
 }
})

router.get('/getOne/:postId', async(req, res) => {
 try{
    const data = await Model.findBtId(req.params.id);
 } 
 catch(error){
    res.status(500).json({msg: error.message})
 }
})
module.exports = router;