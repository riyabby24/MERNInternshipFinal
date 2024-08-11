const mongoose = require('mongoose')
const schema = mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});
const model = mongoose.model('datadetail',schema)
module.exports = model
