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
    {Pid:'11992',Names:['Lena'],
      readReciept:[
        {Name:"Lena",ID:11992,img:"none",readLine:2},
        {Name:"anna",ID:72010154,img:"none",readLine:1}
      ]
    },
    {Pid:'19291',Names:['Mike'],
      readReciept:[
        {Name:"Mike",ID:11992,img:"none",readLine:1},
        {Name:"anna",ID:72010154,img:"none",readLine:1}
      ]
    },
    {Pid:'21219',Names:['Kevin'],
      readReciept:[
        {Name:"Kevin",ID:11992,img:"none",readLine:1},
        {Name:"anna",ID:72010154,img:"none",readLine:1}
      ]
    },
    {Pid:'292922',Names:['Jesse'],
      readReciept:[
        {Name:"Jesse",ID:11992,img:"none",readLine:1},
        {Name:"anna",ID:72010154,img:"none",readLine:1}
      ]
    },
    {Pid:'101010',Names:['Bill'],
      readReciept:[
        {Name:"Bill",ID:11992,img:"none",readLine:-1},
        {Name:"anna",ID:72010154,img:"none",readLine:-1}
      ]
    },
    {Pid:'010101',Names:['steve'],
      readReciept:[
        {Name:"steve",ID:11992,img:"none",readLine:-1},
        {Name:"anna",ID:72010154,img:"none",readLine:-1}
      ]
    },
    {Pid:'001001',Names:['Allan'],
      readReciept:[
        {Name:"Allan",ID:11992,img:"none",readLine:-1},
        {Name:"anna",ID:72010154,img:"none",readLine:-1}
      ]
    },
    {Pid:'100100',Names:['Elon'],
      readReciept:[
        {Name:"Elon",ID:11992,img:"none",readLine:-1},
        {Name:"anna",ID:72010154,img:"none",readLine:-1}
      ]
    },
    {Pid:'192111',Names:['Patrick'],
      readReciept:[
        {Name:"Patrick",ID:11992,img:"none",readLine:-1},
        {Name:"anna",ID:72010154,img:"none",readLine:-1}
      ]
    }
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
