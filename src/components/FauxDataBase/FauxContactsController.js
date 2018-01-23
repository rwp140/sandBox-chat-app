const FauxReadRecieptDB = require('./FauxReadRecieptDB');
const FauxChatIDDB = require('./FauxChatIDDB');
const FauxProfileDB = require('./FauxProfileDB');

export function GetContacts(ID){

  return new Promise((resolve, reject) => {
    let chatDB = FauxChatIDDB.data();
    let chats = [];
    let found = false;
    for(let i =0 , l = chatDB.length; i<l && !found; i++){
      if(ID==chatDB[i].PID){
        chats = chatDB[i].chats;
        found = true;
      } else {
        found = false;
      }
    }

    found = false;
    let profileDB = FauxProfileDB.data();
    let reciepts = FauxReadRecieptDB.data();
    let contactData;
    let contacts = [];
    for(let i =0 , l = chats.length; i<l && !found; i++){
      let users = chats[i].users;
      contactData=[];
      let contactObject = {};
      for(let n =0, c = users.length; n<c; n++){
        let userID = users[n];
        let found2 = false;
        if(userID != ID){
          for(let j =0, k = profileDB.length; j<k && !found2; k++){
            if(userID==profileDB[j].PID){
              //attach contact data
              contactObject= {
                name: profileDB[j].name,
                PID:users[n]
              }

              //get readReciept
              let found3 = false;
              for(let x =0, y = reciepts.length; x<y && !found3 ;x++){
                let reciept = reciepts[x];
                let found4 = false;
                if(reciept.chatID == chats.chatID){
                  let recieptUsers = reciept.readReciepts;
                  for(let a = 0, b=recieptUsers.length; a<b && !found4; a++){
                    if(recieptUsers==userID){
                      contactObject.readLine = recieptUsers.readLine;
                      found4 = true;
                    }
                  }
                  found3 = true;
                }
              }

              found2 = true;
            }else{
              found2 = false;
            }
          }

          if(found2){
            contactData.push({
              chatIDs:chats[i].chatID,
              readLine:contactObject
            });
          }

        }

      }
      // console.log(":boop");
      // console.log(contactData);
      contacts.push(contactData);
      // console.log(contacts);
    }
    resolve(contacts);
  });



  // return contacts;
}
