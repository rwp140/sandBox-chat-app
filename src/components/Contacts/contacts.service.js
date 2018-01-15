//imports
// const Router = require('../.././router/index').default;
const store = require('../../store');


// module.exports = {
//   test:test,LoadChat:LoadChat,RENDERContactsListGET:RENDERContactsListGET
// }
export function test() {
  console.log('test!');
}
//Varaibles
  //Public
  //Private
  //// var dummyData= {chatID:11992, messages:[{SenderName:"Lena",content:"Hello Ann."},{SenderName:"Anna",content:"Hello Lena!"}]};
  var testContactsData = [
    {Pid:11992,Name:'Lena'},
    {Pid:19291,Name:'Mike'},
    {Pid:21219,Name:'Kevin'},
    {Pid:292922,Name:'Jesse'}
  ];
//Functions
  //Public
  export function LoadChat(rotuer,ID){
    console.log("go");
    // console.log(Router);
    // store.state.ChatID = 11992;
    // let ID = 11992;
    store.state.chatID = ID
    // console.log(ID,store.state.chatID);
    // console.log('chat',store.state.chatID);
    //route
    // if(ID==dummyData.chatID){
    //   console.log(dummyData.messages);
    //   console.log(store.state.messages);
    // }

    rotuer.push({ path: '/chat' });
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
