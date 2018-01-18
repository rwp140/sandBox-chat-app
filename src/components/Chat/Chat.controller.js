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
  methods: {
    loadContacts:loadContacts
  },
  mounted:LoadChat
}
//Variables
  //public
  var data = {};
  data.chatID = 0;
  data.messages = [{SenderName:"System",content:"No messages yet.",direction:"right"}];
  data.contacts = ["error name not saved to DB"];
  //private
//Function
  //public
  function LoadChat(){
      data.chatID = store.state.chatID;
      let chat = svc.LoadChat(data.chatID);
      if(chat){
        data.messages = chat.messages;
        data.contacts = chat.contacts;
      }
  }
  function loadContacts(router){
    router.push({ path: '/contacts' })
  }
  //private
