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

    let chatDB = FauxChatMessageDB.Data();
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
        console.log("contact:",chatID_);
        console.log("db:",chatID);
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
        console.log(contactData);
        contacts.push(contactData);
      }
    }
    resolve(contacts);
    // let profileDB = FauxProfileDB.data();
    // // let reciepts = FauxReadRecieptDB.data();
    // let contactData;
    // let contacts = [];
    // for(let i =0 , l = chats.length; i<l && !found; i++){
    //   let users = chats[i].users;
    //   contactData=[];
    //   let contactObject = {};
    //   for(let n =0, c = users.length; n<c; n++){
    //     let userID = users[n];
    //     // let found2 = false;
    //     // if(userID != ID){
    //     //   for(let j =0, k = profileDB.length; j<k && !found2; k++){
    //     //     if(userID==profileDB[j].PID){
    //     //       //attach contact data
    //     //       contactObject= {
    //     //         name: profileDB[j].name,
    //     //         PID:users[n]
    //     //       }
    //     //
    //     //       //get readReciept
    //     //       let found3 = false;
    //     //       for(let x =0, y = reciepts.length; x<y && !found3 ;x++){
    //     //         let reciept = reciepts[x];
    //     //         let found4 = false;
    //     //         if(reciept.chatID == chats.chatID){
    //     //           let recieptUsers = reciept.readReciepts;
    //     //           for(let a = 0, b=recieptUsers.length; a<b && !found4; a++){
    //     //             if(recieptUsers==userID){
    //     //               contactObject.readLine = recieptUsers.readLine;
    //     //               found4 = true;
    //     //             }
    //     //           }
    //     //           found3 = true;
    //     //         }
    //     //       }
    //     //
    //     //       found2 = true;
    //     //     }else{
    //     //       found2 = false;
    //     //     }
    //     //   }
    //     //
    //     //   if(found2){
    //     //     contactData.push({
    //     //       chatIDs:chats[i].chatID,
    //     //       readReciept:contactObject.name
    //     //     });
    //     //   }
    //     //
    //     // }
    //
    //   }
    //   // console.log(":boop");
    //   console.log(contactData);
    //   contacts.push(contactData);
    //   // console.log(contacts);
    // }
  });



  // return contacts;
}
