var Promise = require('bluebird');
var router = require('express').Router();

//models
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var Day = require('../models/day');

//other routes
var attractions = require('./api/attractions');
var days = require('./api/days');

// router.use(attractions, function)
router.use('/api/days', days);

router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll(),
    Day.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities, dbDays) {
    res.render('index', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities,
      templateDays: dbDays
    });
  })
  .catch(next);
});


module.exports = router;
