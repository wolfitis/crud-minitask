"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const url = process.env.MONGO_URI;

_mongoose.default.connect(url);
/**
 * title : name of the event
 * detail: any description for the event
 * category: list of categories of the event
 * itinerary: complete itinerary seprated as objects
 * location: city and country
 * pickup: pickup stops alongwith their pickup time
 * contact: list of people to contact
 * timeline: timeline for the event
 */


const dbSchema = new _mongoose.default.Schema({
  user: {
    uname: String,
    project: [{
      projectTitle: String,
      realData: {
        dataName: String,
        dataPath: [{
          dptitle: String,
          dppath: String,
          _id: false
        }]
      },
      models: [{
        modelName: String,
        parameters: String,
        parameterValues: {
          batchSize: Number,
          trainingCycles: Number
        },
        syntheticData: String,
        syntheticDataValues: [{
          sdtitle: String,
          sdpath: String,
          _id: false
        }],
        _id: false
      }],
      _id: false
    }]
  }
}, {
  versionKey: false
});

const DBModel = _mongoose.default.model('DBModel', dbSchema); // const event = new Event({
//   title: 'sample event 1',
//   detail: 'this is sample detail',
//   category: ['sample', 'test'],
//   location: { place: 's place', city: 's city', country: 's country' },
//   pickup: [{ place: 's chowk', time: Date }, { place: 's2 chowk', time: Date }],
//   contact: [{ name: 'name 1', phoneNo: 'phone no 1', email: 'sample@tm.com' }],
//   timeline: { from: new Date(), to: new Date() }
// });
// event.save().then(res => {
//   console.log('event saved');
//   mongoose.connection.close();
// });
// Event.find({}).then(res => {
//   res.forEach(event => {
//     // console.log(event);
//   });
//   // mongoose.connection.close();
// });


var _default = DBModel;
exports.default = _default;