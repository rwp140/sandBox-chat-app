//Imports
const MessageItem = require('./SubComponents/MessageItem');
const actionSelection = require('./SubComponents/actionSelection');
const chatTopBar = require('./SubComponents/chatTopBar');
//Exports
module.exports = {
  name: 'Chat',
  data () {
    return {
      msg: 'Welcome to Chat'
    }
  },
  components:{MessageItem,actionSelection,chatTopBar}
}
//Variables
  //public
  //private
//Function
  //public
  //private
