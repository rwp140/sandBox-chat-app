//Imports
const store = require('../../store');
const FauxServer = require('../FauxDataBase/FauxServer');

//Exports
// module.exports ={
//   LoadChat
// }
//Variables
  //public
  "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
  //private
  var dummyData= [{
    chatID:'bot',
    contacts:[
      {Name:"Chat-Bot",ID:"bot",img:"Chat",readLine:2},
      {Name:"anna",ID:72010154,img:"A",readLine:5}
    ],
    messages:[
      {SenderName:"Chat-Bot",content:"Hello I'm chat bot.",direction:"right"},
      {SenderName:"Anna",content:"Hello Chat Bot. \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",direction:"left"},
      {SenderName:"ChatBot",content:"let me find a translatation: ...",direction:"right"},
      {SenderName:"ChatBot",content:"translation 1914 by H. Rackham: "  ,direction:"right"},
      {SenderName:"ChatBot",content:"\"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided\""  ,direction:"right"},
      {SenderName:"ChatBot",content:"\"But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.\""  ,direction:"right"}
    ]
  },
  {
    chatID:'11992',
    contacts:[
      {Name:"Lena",ID:11992,img:"none",readLine:1},
      {Name:"anna",ID:72010154,img:"none",readLine:2}
    ],
    messages:[
      {SenderName:"Lena",content:"Hello Anna",direction:"right"},
      {SenderName:"Anna",content:"yo Lena!",direction:"left"},
      {SenderName:"Anna",content:"How was your day?",direction:"left"}
    ]
  },
  {
    chatID:'19291',
    contacts:[
      {Name:"Mike",ID:19291,img:"none",readLine:1},
      {Name:"anna",ID:72010154,img:"none",readLine:1}
    ],
    messages:[
      {SenderName:"Mike",content:"Hello Ann.",direction:"right"},
      {SenderName:"Anna",content:"Hello Mike!",direction:"left"}
    ]
  },
  {
    chatID:'21219',
    contacts:[
      {Name:"Kevin",ID:21219,img:"none",readLine:1},
      {Name:"anna",ID:72010154,img:"none",readLine:1}
    ],
    messages:[
      {SenderName:"Kevin",content:"Hello Ann.",direction:"right"},
      {SenderName:"Anna",content:"Hello Kevin",direction:"left"}
    ]
  },
  {
    chatID:'292922',
    contacts:[
      {Name:"Jesse",ID:292922,img:"none",readLine:1},
      {Name:"anna",ID:72010154,img:"none",readLine:1}
    ],
    messages:[
      {SenderName:"Jesse",content:"Hello Ann.",direction:"right"},
      {SenderName:"Anna",content:"Hello Jesse!",direction:"left"}
    ]
  }];
//Functions
  //Public
  export function LoadChat(chatID){
    //route
    //dummy code
    // console.log("getting chat");
    return new Promise((resolve, reject) =>{
      FauxServer.get('/chat',chatID)
        .then((val)=>{
          // console.log('val',val);
          resolve(val);
        }).catch((reason)=>{
          reject(reason);
        });
    });
  }
  //Private
  function loadDummyData() {
    let mesagesData = [{SenderName:"System",content:"No messages yet.",direction:"right"}];
    let found = false;
    for(let i=0,l=dummyData.length; i<l&&!found; i++)
    {
      let chatID = dummyData[i].chatID;
      if(ID==chatID){
        mesagesData = dummyData[i];
        found = true;
      } else {
        mesagesData = {
          chatID:'error',
          contacts:["Lena"],
          messages:[
            {SenderName:"System",content:"No messages yet.",direction:"right"}
          ]
        }
      }
    }
    return mesagesData;
  }
