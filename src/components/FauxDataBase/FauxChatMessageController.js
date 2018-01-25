const FauxChatMessageDB = require('./FauxChatMessageDB');

export function GetChat(data){
  return new Promise((resolve, reject) =>{
    let chatDB = FauxChatMessageDB.Data();
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
