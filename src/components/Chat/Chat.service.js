//Imports
const store = require('../../store');

//Exports
module.exports ={
  LoadChat
}
//Variables
  //public
  //private
  var dummyData= {
    chatID:11992,
    messages:[
      {SenderName:"Lena",content:"Hello Ann.",direction:"right"},
      {SenderName:"Anna",content:"Hello Lena!",direction:"left"}
    ]
  };
//Functions
  //Public
  function LoadChat(ID){
    //route
    if(ID==dummyData.chatID){
      console.log(dummyData);
      return dummyData.messages;
    }
  }
  //Private
