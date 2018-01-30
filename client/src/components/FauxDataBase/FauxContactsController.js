// const FauxReadRecieptDB = require('./FauxReadRecieptDB');
const FauxChatIDDB = require('./FauxChatIDDB');
const FauxProfileDB = require('./FauxProfileDB');
const FauxChatMessageDB = require('./FauxChatMessageDB');

export function GetContacts(ID){

  return new Promise((resolve, reject) => {
    //get user Chat IDs
    let chatIDDB = FauxChatIDDB.data();
    let chatIDs = [];
    let foundChatIDs = false;
    for(let i =0 , l = chatIDDB.length; i<l && !foundChatIDs; i++){
      if(ID==chatIDDB[i].PID){
        chatIDs = chatIDDB[i].chatIDs;
        foundChatIDs = true;
      } else {
        foundChatIDs = false;
      }
    }
    // console.log('contacts',chatIDs);
    let chatDB = FauxChatMessageDB.Data();
    // console.log('chatDB',chatDB);
    let contactData = {};
    let contacts = [];
    let foundAllContacts = false;
    for(let i =0,l=chatDB.length; i<l && !foundAllContacts; i++){
      let chat = chatDB[i];
      let chatID = chat.chatID;
      contactData = {};
      let foundContact = false;
      for(let n = 0, c=chatIDs.length; n<c && !foundContact ;n++){
        let chatID_ = chatIDs[n];
        // console.log("contact:",chatID_);
        // console.log("db:",chatID);
        if(chatID_ == chatID){
          contactData.chatID=chatID;
          let reciept_ = chat.ReadReceipt;
          // let names_ = [];
          // for(let x =0,y=reciept_.length;x<y;x++){
          //   names_.push(reciept_.name);
          // }
          contactData.ReadReciept = chat.ReadReceipt;
          foundContact = true;
        }
      }
      if(foundContact){
        // console.log(contactData);
        contacts.push(contactData);
      }
    }
    resolve(contacts);
  });



  // return contacts;
}
