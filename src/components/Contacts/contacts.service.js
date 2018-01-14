//imports
// const Router = require('../.././router/index').default;
const store = require('../../store');

//exports
// module.exports = {
//   LoadChat,RENDERContactsListGET,test
// }
module.exports = {
  test,LoadChat
}
function test() {
  console.log('test!');
}
//Varaibles
  //Public
  //Private
  var dummyData= {chatID:11992, messages:[{SenderName:"Lena",content:"Hello Ann."},{SenderName:"Anna",content:"Hello Lena!"}]};
//Functions
  //Public
  function LoadChat(rotuer){
    console.log("go");
    // console.log(Router);
    // store.state.ChatID = 11992;
    let ID = 11992;
    store.state.chatID = ID
    console.log(ID,store.state.chatID);
    //route
    if(ID==dummyData.chatID){
      console.log(dummyData.messages);
      store.state.messages= dummyData.messages;
      console.log(store.state.messages);
    }

    rotuer.push({ path: '/chat' });
  }
  function RENDERContactsListGET(){

  }
  function UserListGET(){

  }
  function ChatReceiptGET() {

  }
  //Private
