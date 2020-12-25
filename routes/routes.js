const express = require("express");
const path = require('path')
const router = express.Router();

module.exports = () => {
 
  router.get('/', (req, res) => {
    console.log( req.body)
    res.json([{"name":"james foely"}])
  });
 
  /* 
  @desc  matching route parameters by checking the param value
   router.param('name', (req, res, next, value)=>{
    console.log("this isn't working")
    console.log(req.params)
    res.send(`Value from route parameter is......${value}`)
  })
  */
 
  router.get('/user/:name/age/:age', (req, res) => {   
    // console.log(req.query)
    res.send(`Route paramater name: ${req.params.name} \n Route paramater age: ${req.params.age}`);
  });


   router.post('/', (req, res)=>{
     res.send('this is a default POST route')
   })

   router.post('/user/:name/age/:age', (req, res) => {   
    // console.log(req.params)
    // console.log(req.query)
    res.send(`Route paramater name: ${req.params.name} \n Route paramater age: ${req.params.age}`);
  });

   router.post('/forms', (req, res)=>{
     console.log(req.body)
    res.send("hello there we got your shit")
  })

  return router
};
