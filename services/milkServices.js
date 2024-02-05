const MilkModel = require('../models/milkModel');

module.exports = class MilkServices {
  static async addMilkDetails({data}) {
    try {
      const res = await MilkModel.create(data);
      return {success: true, addedMilkData: res};
    } catch (error) {
      return {success: false, error};
    }
  }

  static async getMilkDetailsByCurrentMonthAndYear({data}) {
    const {month, year} = data;
    try {
      const res = await MilkModel.find({
        month: month,
        year: year,
      });
      return {success: true, milkDataList: res};
    } catch (error) {
      return {success: false, error};
    }
  }

  static async updateMilkDetail({id, data}) {
    try {
      const res = await MilkModel.findByIdAndUpdate(
        {_id: id},
        {$set: data},
        {new: true}
      );
      return {success: true, updatedMilkData: res};
    } catch (error) {
      return {success: false, error};
    }
  }
};
