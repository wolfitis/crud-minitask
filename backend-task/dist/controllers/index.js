"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRecord = exports.readRecords = exports.delRecord = exports.createRecord = void 0;

var _index = _interopRequireDefault(require("../models/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// nfec
const readRecords = async () => {
  const res = await _index.default.DBModel.find();
  return res;
}; // export const readRecordById = async (id) => {
//   const res = await models.DBModel.findById(id);
//   return res;
//   // try {
//   //   const res = await models.Record.findById(id);
//   // } catch (error) {
//   //   throw error;
//   // }
// };


exports.readRecords = readRecords;

const createRecord = async recordToAdd => {
  // console.log('to add---', recordToAdd.uname)
  const record = new _index.default.DBModel(recordToAdd);
  record.save().then(res => {
    console.log('record saved', recordToAdd, 'yahooooo');
    return res;
  });
};

exports.createRecord = createRecord;

const updateRecord = async (filter, updateData) => {
  const res = await _index.default.DBModel.updateOne(filter, updateData);
  return res;
};

exports.updateRecord = updateRecord;

const delRecord = async filter => {
  const res = await _index.default.DBModel.deleteOne(filter);
  return res;
};

exports.delRecord = delRecord;