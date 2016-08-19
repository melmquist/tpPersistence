var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');


router.get('/api/restaurants', function(req, res, next){

  Restaurant.findAll()
  .then(function(foundRestaurants){
    res.json(foundRestaurants)
  })
  .catch(next);

  // res.send("IT's working????");
  //res.send

});

router.get('/api/hotels', function(req, res, next){

  Hotel.findAll()
  .then(function(foundHotels){
    res.json(foundHotels)
  })
  .catch(next);

  // res.send("IT's working????");
  //res.send

});
router.get('/api/activities', function(req, res, next){

  Activity.findAll()
  .then(function(foundActivities){
    res.json(foundActivities)
  })
  .catch(next);

  // res.send("IT's working????");
  //res.send

});

module.exports = router;
