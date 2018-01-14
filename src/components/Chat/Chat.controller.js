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
    return {
      chatID: store.state.chatID, //'Welcome to Chat'
      messages:store.state.messages
    }
  },
  components:{MessageItem:MessageItem,ActionSelection:actionSelection,ChatTopBar:chatTopBar}
}
console.log(store);
console.log(store.state);
//Variables
  //public
  //private
//Function
  //public
  function LoadChat(){

  }
  //private
