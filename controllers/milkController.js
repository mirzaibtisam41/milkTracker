const MilkServices = require('../services/milkServices');

module.exports = class MilkControllers {
  static async addMilkDetails(req, res) {
    const data = req.body;
    const {success, addedMilkData, error} = await MilkServices.addMilkDetails({
      data,
    });

    if (error) {
      return res.status(400).json({error: 'Data not added successfully'});
    }

    if (success) {
      return res
        .status(200)
        .json({msg: 'Data added successfully', body: addedMilkData});
    }
  }

  static async getMilkDetailsByCurrentMonthAndYear(req, res) {
    const data = req.body;
    const {success, milkDataList, error} =
      await MilkServices.getMilkDetailsByCurrentMonthAndYear({
        data,
      });

    if (error) {
      return res.status(400).json({error: 'Data not get successfully'});
    }

    if (success) {
      return res
        .status(200)
        .json({msg: 'Data get successfully', body: milkDataList});
    }
  }
};
