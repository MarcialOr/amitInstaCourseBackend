const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')

router.post('/createpost',requireLogin, (req,res)=>{
    const {title, body} = req.body
    if(!title || !body){
       return res.status(422).json({error: "Please add all the fields"})
    }
     const post = new post({
         title,
         body,
         postedBy
     })
     post.save().then(result=>{
         res.json({post:result})
     })
     .catch(err=>{
         console.log({err: "error posting"});
     })
})


module.exports = router