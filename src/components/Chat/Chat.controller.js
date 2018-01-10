//Imports
const MessageItem = require('./SubComponents/MessageItem').default;
const actionSelection = require('./SubComponents/actionSelection').default;
const chatTopBar = require('./SubComponents/chatTopBar').default;
//Exports
module.exports = {
  name: 'Chat',
  data () {
    return {
      msg: 'Welcome to Chat'
    }
  },
  components:{MessageItem:MessageItem,ActionSelection:actionSelection,ChatTopBar:chatTopBar}
}
//Variables
  //public
  //private
//Function
  //public
  //private
