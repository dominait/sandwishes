const express = require('express')
const cors = require('cors')
const sandWishRoutes = require('./routes/site-routes')
const routes = require('./routes/routes.js')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
// const bodyParser = require('body-parser') not required now can use multer do do all requests
const multer = require('multer');
const products = require('./data/things')


 
const upload = multer();
const app = express();
const port = 3000;

app.use(cors())
app.use(expressLayouts)
app.set('layout',path.join(__dirname, 'views/layouts/default') )


app.set('views',  path.join(__dirname, 'views'))
app.set('view engine', "ejs")
 



// for parsing application/json
app.use(express.json()); 

// for pargin application/text
app.use(express.text()); 

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 

// for parsing multipart/form-data
app.use(upload.array()); 

app.use(express.static(path.join(__dirname, 'public')))
app.use('css', express.static(path.join(__dirname, 'public/css')))
app.use('img', express.static(path.join(__dirname, 'public/img')))
app.use('js', express.static(path.join(__dirname, 'public/js')))

app.use(sandWishRoutes())
app.use('/api', routes())
 
app.use((req, res, next)=>{
    res.status(404).render('404', {pageTitle:'Page Not Found', message:"woops you caught us...fixing the problem"})
  })
app.listen(port, ()=> {
    console.log(`Your Server Is Running On---------> http://localhost:${port}`)
})

 