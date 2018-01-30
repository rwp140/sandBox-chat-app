// const FauxChatMessageDB = require('./FauxChatMessageDB');

export function GetChat(data){
  return new Promise((resolve, reject) =>{
    let chatDB = FauxChatMessageDB.Data;
    let chatID = data;
    let chat_ = {}
    let chatFound = false;
    for(let i =0,l=chatDB.length; i<l && !chatFound ; i++){
      let chat = chatDB[i];
      let _chatID = chat.chatID;
      if(chatID == _chatID){
        chat_ = chat;
        chatFound=true;
      }
    }

    resolve(chat_);
  });
}
export function PostMessage(ID,message){
  return new Promise((resolve, reject) => {
    // console.log(message);
    let chatDB = FauxChatMessageDB.Data;
    // let chat = {};
    let foundChat = false;
    for(let i =0,l=chatDB.length; i<l && !foundChat; i++){
      let chat_ = chatDB[i];
      let chatID_ = chat_.chatID;
      if(ID==chatID_){
        // chat = chat_;
        // chat_.messages.push(message)
        FauxChatMessageDB.Data[i].messages.push(message);
        // console.log(chat_);
        // console.log(FauxChatMessageDB.Data[i]);
        // FauxChatMessageDB.Data[i] = chat_;
        // console.log(FauxChatMessageDB.Data[i]);
        foundChat = true;
      }
    }
  });
}
const FauxChatMessageDB ={};
FauxChatMessageDB.Data = [
  {
    chatID:'bot-72010154',
    ReadReceipt:[
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
    chatID:'11992-72010154',
    ReadReceipt:[
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
    chatID:'19291-72010154',
    ReadReceipt:[
      {Name:"Mike",ID:19291,img:"none",readLine:1},
      {Name:"anna",ID:72010154,img:"none",readLine:1}
    ],
    messages:[
      {SenderName:"Mike",content:"Hello Ann.",direction:"right"},
      {SenderName:"Anna",content:"Hello Mike!",direction:"left"}
    ]
  },
  {
    chatID:'21219-72010154',
    ReadReceipt:[
      {Name:"Kevin",ID:21219,img:"none",readLine:1},
      {Name:"anna",ID:72010154,img:"none",readLine:1}
    ],
    messages:[
      {SenderName:"Kevin",content:"Hello Ann.",direction:"right"},
      {SenderName:"Anna",content:"Hello Kevin",direction:"left"}
    ]
  },
  {
    chatID:'292922-72010154',
    ReadReceipt:[
      {Name:"Jesse",ID:292922,img:"none",readLine:1},
      {Name:"anna",ID:72010154,img:"none",readLine:1}
    ],
    messages:[
      {SenderName:"Jesse",content:"Hello Ann.",direction:"right"},
      {SenderName:"Anna",content:"Hello Jesse!",direction:"left"}
    ]
  },
  {
    chatID:'101010-72010154',
    ReadReceipt:[
      {Name:"bill",ID:101010,img:"none",readLine:-1},
      {Name:"anna",ID:72010154,img:"none",readLine:-1}
    ]
  },
  {
    chatID:'010101-72010154',
    ReadReceipt:[
      {Name:"steve",ID:101010,img:"none",readLine:-1},
      {Name:"anna",ID:72010154,img:"none",readLine:-1}
    ]
  },
  {
    chatID:'001001-72010154',
    ReadReceipt:[
      {Name:"Allan",ID:101010,img:"none",readLine:-1},
      {Name:"anna",ID:72010154,img:"none",readLine:-1}
    ]
  },
  {
    chatID:'100100-72010154',
    ReadReceipt:[
      {Name:"Elon",ID:101010,img:"none",readLine:-1},
      {Name:"anna",ID:72010154,img:"none",readLine:-1}
    ]
  }
]
