const mongoose = require("mongoose");
const options = {
  poolSize: 10
};
mongoose.Promise = global.Promise;
//"mongodb://localhost:27017/HomeAway",
// "mongodb://sojanmathew:sojanm28@ds133920.mlab.com:33920/homeaway",
mongoose.connect(
  // 'mongodb://Akhil:Balameenakshi1!@ds163940.mlab.com:63940/homeaway'
  'mongodb://linkedin:linkedinteam1@ds159263.mlab.com:59263/linkedin',

  options
);

module.exports = mongoose;
