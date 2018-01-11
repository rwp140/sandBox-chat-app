//Imports
const MessageItem = require('./SubComponents/MessageItem').default;
const actionSelection = require('./SubComponents/actionSelection').default;
const chatTopBar = require('./SubComponents/chatTopBar').default;
const store = require('../../store');
//Exports
module.exports = {
  name: 'Chat',
  data () {
    return {
      msg: store.state.chatID //'Welcome to Chat'
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
  //private
