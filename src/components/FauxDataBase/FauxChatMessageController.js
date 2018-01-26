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
export function PostMessage(ID,message){
  return new Promise((resolve, reject) => {
    console.log(message);
    let chatDB = FauxChatMessageDB.Data();
    // let chat = {};
    let foundChat = false;
    for(let i =0,l=chatDB.length; i<l && !foundChat; i++){
      let chat_ = chatDB[i];
      let chatID_ = chat_.chatID;
      if(ID==chatID_){
        // chat = chat_;
        chat_.messages.push(message)
        FauxChatMessageDB.Data()[i].messages.push(message);
        console.log(chat_);
        console.log(FauxChatMessageDB.Data()[i]);
        FauxChatMessageDB.Data()[i] = chat_;
        console.log(FauxChatMessageDB.Data()[i]);
        foundChat = true;
      }
    }
  });
}
