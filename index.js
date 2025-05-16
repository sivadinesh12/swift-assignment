const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
const Users = require('./user')
const Posts = require('./posts')
const Comments = require('./comments')


app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://hariprasath5745:mqbxRnycqrDwepRC@cluster1.5ncaltq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
  .then(() => {
    console.log("DB connected successfully")
    app.listen(10000, () => {
      console.log("Server running successfully at port 10000")
    })
  })
  .catch(err => {
    console.error("MongoDB connection error:", err.message)
  })

app.post('/newUser', async (req, res) => {
    try{
        const {user} = req.body
        const newUser = await Users.create({user})
        res.status(200).json(newUser)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

app.post('/newPost', async (req, res) => {
    try{
        const {post} = req.body
        const newPost = await Posts.create({post})
        res.status(200).json(newPost)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

app.post('/newComment', async (req, res) => {
    try{
        const {comment} = req.body
        const newComment = await Comments.create({comment})
        res.status(200).json(newComment)
    }catch(error){
        res.status(400).json({error: error.message})
        console.log(error.message)
    }
})