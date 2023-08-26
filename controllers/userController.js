const fs = require('fs')
const blog = require ('../database/models/blog')

const home = async (req, res)=>{
    const blogs = await blog.findAll()
    const records = blogs.map((v)=>{
        return v.dataValues
    })
    console.log(records); 
    res.render('index',{records})
 }
 
 const about = (req, res)=>{
     res.render('about')
 }
 
 const contact = (req, res)=>{
     res.render('contact')
 }

 const viewPost = (req, res)=>{
    res.render('add_posts')
}

const createPost = async (req, res)=>{
    const {title, description, author} = req.body
    // inserting the database values
    await blog.create({title, description, author})
    // res.send('blog created successfully')
    res.redirect('/')
}
 
 module.exports = {
     home,
     about,
     contact,
     viewPost,
     createPost
 }