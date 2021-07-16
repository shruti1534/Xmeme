const express = require('express')
const router = express.Router()
const Meme = require('../models/database')

router.get('/addmeme', (req,res) => {
    res.render('addNew')
})

router.post('/memes', (req, res) => {

    const meme = new Meme(req.body)

    meme.save().then(meme =>{
        res.send(meme)
    }).catch( err=>{
        res.status(400).send("Unable to save!")
        console.log("Error",err)
    })
})

router.post('/memes/add', (req, res) => {

    const meme = new Meme(req.body)

    meme.save().then(meme =>{
        res.redirect('/')
    }).catch( err=>{
        res.status(400).send("Unable to save!")
        console.log("Error",err)
    })
})

router.get('/memes/:id', (req,res) => {
    Meme.findById(req.params.id, function (err, meme) {
        if(err) {
            res.status(404).send("Not Found")
        }
        else
            res.send(meme);
    });
}) 

router.delete('/meme/:id', async (req,res) =>{
    const meme = await Meme.findByIdAndRemove({
        _id: req.params.id
    })
    res.redirect('/')
})
module.exports = router
