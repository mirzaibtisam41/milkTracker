const route = require('express').Router();
const {
  addMilkDetails,
  getMilkDetailsByCurrentMonthAndYear,
  updateMilkDetail,
} = require('../controllers/milkController');

route.post('/', addMilkDetails);
route.post('/find', getMilkDetailsByCurrentMonthAndYear);
route.patch('/:id', updateMilkDetail);

module.exports = route;
