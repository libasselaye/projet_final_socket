



const express = require('express');
const path = require('path');

const __public = path.join(__dirname, '../../public');

/**
 * Router.
 */

const router = express.Router();

// GET home.html page.
//ICI le / renvoie a html/index.html
router.get('/', function(req, res, next) {
  res.sendFile('html/index.html', { root: __public });
});

//GET quizz page
router.get('/quizz', function(req, res, next) {
  res.sendFile('html/quizz.html', { root: __public });
});

//GET controls page
router.get('/controls', function(req, res, next) {
  res.sendFile('html/controls.html', { root: __public });
});

module.exports = router;
