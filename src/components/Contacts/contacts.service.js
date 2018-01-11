//imports
const Router = require('../.././router/index').default;

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
//Functions
  //Public
  function LoadChat(rotuer){
    console.log("go");
    // console.log(Router);
    rotuer.push({ path: '/chat' });
  }
  function RENDERContactsListGET(){

  }
  function UserListGET(){

  }
  function ChatReceiptGET() {

  }
  //Private
