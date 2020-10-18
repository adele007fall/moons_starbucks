var express = require('express');
var router = express.Router();
  
router.get('/menus/drink', function(req, res, next) {
  res.render('/menus/drink', { title: 'Express' });
});
  

module.exports.menus = menus;