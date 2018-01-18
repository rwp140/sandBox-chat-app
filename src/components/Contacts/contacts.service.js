//imports
// const Router = require('../.././router/index').default;
const store = require('../../store');
// module.exports = {
//   test:test,LoadChat:LoadChat,RENDERContactsListGET:RENDERContactsListGET
// }

//Varaibles
  //Public
  //Private
  var testContactsData = [
    {Pid:'11992',Name:'Lena'},
    {Pid:'19291',Name:'Mike'},
    {Pid:'21219',Name:'Kevin'},
    {Pid:'292922',Name:'Jesse'},
    {Pid:'101010',Name:'Bill'},
    {Pid:'010101',Name:'steve'},
    {Pid:'001001',Name:'Allan'},
    {Pid:'100100',Name:'Elon'},
    {Pid:'192111',Name:'Patrick'}
  ];
//Functions
  //Public
  export function LoadChat(rotuer,ID){
    // store.state.chatID = ID
    let path_ = '/chat/'+ID;
    rotuer.push({ path:path_ });
  }
  export function RENDERContactsListGET(){
    //set up promise
    return new Promise((resolve, reject) => {
      //set route
      //get route
        //resolve promise
      resolve(testContactsData);
        //reject promise
    });
  }
  // function UserListGET(){
  //
  // }
  // function ChatReceiptGET() {
  //
  // }
  //Private
