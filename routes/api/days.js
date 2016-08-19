var Promise = require('bluebird');
var router = require('express').Router();

var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day');

var attractions = require('./attractions');

router.get('/', function(req, res, next){

  Day.findAll()
  .then(function(foundDay){
    res.json(foundDay)
  })
  .catch(next);

})



router.get('/:id', function(req, res, next){
    //The code was not working and I think it was because a pair of "{}" got deleted by accident in the .findOne function
    //It's still not working but that's because there are no days in the DB yet, but at least it doesnt auto-crash
    var findDayById = Day.findOne({
      where: {
        number: req.params.id
      }
    })
    .then(function(foundDay){
      // console.log("I made it inside this block of code!!!")
      res.json(foundDay)
    })
    .catch(next);

})






module.exports = router;
