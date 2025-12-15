const express = require('express');
const mouse = require('../models/mouse'); 
const router = express.Router();   

router.get("/mouses", async(req, res) => {
    try{
        const mice = await mouse.find();
        res.json(mice);
    } catch(err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;
