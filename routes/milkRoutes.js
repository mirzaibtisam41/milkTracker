const route = require('express').Router();
const {
  addMilkDetails,
  getMilkDetailsByCurrentMonthAndYear,
} = require('../controllers/milkController');

route.post('/', addMilkDetails);
route.get('/', getMilkDetailsByCurrentMonthAndYear);

module.exports = route;
