//Imports
const MessageItem = require('./SubComponents/MessageItem').default;
const actionSelection = require('./SubComponents/actionSelection').default;
const chatTopBar = require('./SubComponents/chatTopBar').default;
const store = require('../../store');

const svc = require('./Chat.service.js')
//Exports
module.exports = {
  name: 'Chat',
  data () {
    return data
  },
  components:{
    MessageItem:MessageItem,
    ActionSelection:actionSelection,
    ChatTopBar:chatTopBar
  },
  mounted:LoadChat
}
// console.log(store);
// console.log(store.state);
//Variables
  //public
  var data = {};
  data.chatID = 0;
  data.messages = {};
  //private
//Function
  //public
  function LoadChat(){
    // console.log("loading chat");
    // let chatID = store.state.chatID;
    //this.$nextTick(function(){
      data.chatID = store.state.chatID;
      // console.log("chatID", data.chatID,store.state.chatID);
      // console.log("chatID", data.chatID,store.state.chatID);
      data.messages = svc.LoadChat(data.chatID);
    // })
  }
  //private
