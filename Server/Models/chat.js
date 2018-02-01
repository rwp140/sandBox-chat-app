//imports
const mongoose = require('mongoose');

//schema
const chatSchema = new mongoose.Schema({
  chatID: String,
  contacts:[
    {
      name: String,
      PID: String,
      readLine: Number
    }
  ],
  messages:[
    {
      Sender: String,
      Content: String
    }
  ]
}, {});

//export
const Chat = mongoose.model('chat', chatSchema);

 module.exports = Chat;
