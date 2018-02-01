//imports
const mongoose = require('mongoose');

//schema
const userprofileSchema = new mongoose.Schema({
  userName: String,
  password: String,
  PID: String,
  UserToken: String
}, {});

//export
const Profile = mongoose.model('profile', profileSchema);

 module.exports = Chat;
