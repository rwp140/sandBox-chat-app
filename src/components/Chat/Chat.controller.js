//Imports
const MessageItem = require('./SubComponents/MessageItem').default;
const actionSelection = require('./SubComponents/actionSelection').default;
const chatTopBar = require('./SubComponents/chatTopBar').default;

const svc = require('./Chat.service.js');
const store = require('../../store');

//================================= Variables ==================================
  //private
  //public
  var data = {};
  // data.chatID = 0;
  data.messages = [{SenderName:"System",content:"No messages yet.",direction:"right"}];
  data.contacts = ["error name not saved to DB"];
  data.messageOut = "";
//================================= Function ===================================

  //private
  //public
  function LoadChat(){
      // data.chatID = store.state.chatID;
      // console.log('chatID',this.chatID);
      // let chat = svc.LoadChat(this.chatID);
      // if(chat){
      //   data.messages = chat.messages;
      //   data.contacts = chat.contacts;
      // }
      data.messageOut = "";
      svc.LoadChat(this.chatID)
        .then((val)=>{
          // console.log("val got");
          data.messages = val.messages;
          data.contacts = val.ReadReceipt;
        })
        .catch((reason)=>{
          console.error(reason);
        });
  }
  function sendMessage(event){
    console.log(data.messageOut);
    let SenderName_ = localStorage.DisplayName;
    let content_ = data.messageOut;
    let direction_ ="right";

    // data.messageOut = "";

    let messageOut = {SenderName:SenderName_,content:content_,direction:direction_}
    console.log("messageOut",messageOut);
    svc.SendMessagePost(this.chatID,messageOut);
  }
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
  methods:{
    LoadChat:LoadChat,
    sendMessage:sendMessage
  },
  props:['chatID'],
  mounted:LoadChat
}
