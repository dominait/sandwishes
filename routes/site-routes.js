const express = require('express')
const router = express.Router()

module.exports = ()=>{
    router.get('/', function(req, res) {
        var locals = {
          title: 'Index Page',
          css: '/css/main.css',
        };
        res.render('index', locals);
      });
      router.get('/sandwishes', function(req, res) {
        var locals = {
          title: 'Index Page',
          css: '/css/main.css',
        };
        res.render('pages/sandwishes', locals);
      });
      router.get('/delivery', function(req, res) {
        var locals = {
          title: 'Index Page',
          css: '/css/main.css',
        };
        res.render('pages/delivery', locals);
      });
    router.get('/masters', function(req, res) {
        var locals = {
          title: 'Index Page',
          css: '/css/main.css',
        };
        res.render('pages/masters', locals);
      });

      return router
}