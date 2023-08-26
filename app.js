const express = require('express')
const bodyParser = require('body-parser')
const dotEnv = require('dotenv')
const userRoute = require('./routes/userRoute')
const ejs = require('ejs')
const expressLayouts = require ('express-ejs-layouts')
const sequelize = require('./database/dbConnect')


dotEnv.config()

const port = process.env.PORT || 7777


const app = express()


app.set('view engine','ejs')
app.set('views',__dirname+'/views/pages')
app.set('layout',__dirname+'/views/layout')
// setting view
app.use(expressLayouts)
// making the server realize the static files so as to render them
app.use(express.static(__dirname+'/public'))
// app.set('view engine','ejs')

// bdy parser middle to handle request
app.use(bodyParser.urlencoded({ extended: false }))

// userRoute
app.use('/',userRoute)
// app.use('./about',userRoute)



const startServer = async()=>{
    try{
        await sequelize.authenticate();
        app.listen(port,()=>{
            console.log(`server connected on http://localhost:${port}`)
        })
    } catch(e){
        console.log(e)
    }
}

startServer()

// express().listen(port,()=>{
//     console.log(`server connected on http://localhost:${port}`)
// })
