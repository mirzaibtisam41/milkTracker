const mongoose = require('mongoose');

module.exports.mongoConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log('MongoDB Connected Successfully');
    })
    .catch(() => {
      console.log('Error while DB connection');
    });
};
