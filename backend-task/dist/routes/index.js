"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putRecord = exports.postRecord = exports.getRecords = exports.deleteRecord = exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = require("../controllers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
const router = _express.default.Router();
/**
 * to get all records
 * @param {*} req
 * @param {*} res
 * @returns
 */


const getRecords = async (req, res) => {
  let filter = {};

  try {
    const result = await (0, _index.readRecords)(filter);
    res.send(result);
    return;
  } catch (error) {
    res.send('Get Record Failed'); // throw error;
  }
};
/**
 * to Add a new record
 * @param {*} req
 * @param {*} res
 * @returns
 */


exports.getRecords = getRecords;

const postRecord = async (req, res) => {
  console.log(req.body);
  let user = req.body.user;
  let dataToAdd = {
    user: user
  };

  try {
    const result = await (0, _index.createRecord)(dataToAdd);
    return res.send('message: Created');
  } catch (error) {
    // throw error;
    res.send('Create Record Failed');
  }
};
/**
 * to Update/Edit a record by its ID
 * @param {*} req
 * @param {*} res
 */


exports.postRecord = postRecord;

const putRecord = async (req, res) => {
  let id = req.body.id;
  let updatedUser = req.body.user;
  let updatedData = {
    user: updatedUser
  };

  try {
    const result = await (0, _index.updateRecord)({
      _id: id
    }, updatedData);
    console.log(result);
    res.send('Updated Record');
  } catch (error) {
    // throw error;
    console.log(error);
    res.send('Updated Record Failed');
  }
};
/**
 * to Delete a record by its ID
 * @param {*} req
 * @param {*} res
 */


exports.putRecord = putRecord;

const deleteRecord = async (req, res) => {
  try {
    let id = req.body.id;
    const result = await (0, _index.delRecord)({
      _id: id
    });
    res.send('DELETE Record');
  } catch (error) {
    // throw error;
    res.send('DELETE Record Failed');
  }
};

exports.deleteRecord = deleteRecord;
router.route('/data').post(postRecord).get(getRecords).put(putRecord).delete(deleteRecord);
var _default = router;
exports.default = _default;