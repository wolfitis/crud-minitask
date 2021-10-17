import models from '../models/index.js';

// nfec

export const readRecords = async () => {
  const res = await models.DBModel.find();
  return res;
};

// export const readRecordById = async (id) => {
//   const res = await models.DBModel.findById(id);
//   return res;
//   // try {
//   //   const res = await models.Record.findById(id);
//   // } catch (error) {
//   //   throw error;
//   // }
// };

export const createRecord = async (recordToAdd) => {
  // console.log('to add---', recordToAdd.uname)

  const record = new models.DBModel(recordToAdd);
  record.save().then((res) => {
    console.log('record saved', recordToAdd, 'yahooooo');
    return res;
  });
};

export const updateRecord = async (filter, updateData) => {
  const res = await models.DBModel.updateOne(filter, updateData);
  return res;
};

export const delRecord = async (filter) => {
  const res = await models.DBModel.deleteOne(filter);
  return res;
};
