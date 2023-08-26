const express = require('express')
const {home,about,contact,viewPost,createPost} = require('../controllers/userController')

// extending thr server
const app = express.Router()

app.get('/', home)

app.get('/about', about)

app.get('/contact', contact)

app.get('/post', viewPost)

app.post('/post',createPost)


module.exports = app