const route = require('express').Router();
const {
  addMilkDetails,
  getMilkDetailsByCurrentMonthAndYear,
} = require('../controllers/milkController');

route.post('/', addMilkDetails);
route.post('/find', getMilkDetailsByCurrentMonthAndYear);

module.exports = route;
