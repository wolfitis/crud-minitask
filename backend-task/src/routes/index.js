/* eslint-disable */
import express from 'express';
import { createRecord, readRecords, delRecord, updateRecord } from '../controllers/index.js';

const router = express.Router();

/**
 * to get all records
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getRecords = async (req, res) => {
  let filter = {};
  try {
    const result = await readRecords(filter);
    res.send(result);
    return;
  } catch (error) {
    res.send('Get Record Failed');
    // throw error;
  }
};

/**
 * to Add a new record
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const postRecord = async (req, res) => {
  console.log(req.body);
  let user = req.body.user;
  let dataToAdd = {
    user: user,
  };

  try {
    const result = await createRecord(dataToAdd);
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
export const putRecord = async (req, res) => {
  let id = req.body.id;
  let updatedUser = req.body.user;
  let updatedData = {
    user: updatedUser,
  };
  try {
    const result = await updateRecord({ _id: id }, updatedData);
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
export const deleteRecord = async (req, res) => {
  try {
    let id = req.body.id;
    const result = await delRecord({ _id: id });
    res.send('DELETE Record');
  } catch (error) {
    // throw error;
    res.send('DELETE Record Failed');
  }
};

router.route('/data').post(postRecord).get(getRecords).put(putRecord).delete(deleteRecord);

export default router;
