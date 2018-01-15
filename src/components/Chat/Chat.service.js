//Imports
const store = require('../../store');

//Exports
module.exports ={
  LoadChat
}
//Variables
  //public
  //private
    // {Pid:11992,Name:'Lena'},
    // {Pid:19291,Name:'Mike'},
    // {Pid:21219,Name:'Kevin'},
    // {Pid:292922,Name:'Jesse'}
  var dummyData= [{
    chatID:'bot',
    messages:[
      {SenderName:"Chat-Bot",content:"Hello I'm chat bot.",direction:"right"},
      {SenderName:"Anna",content:"Hello Chat Bot.",direction:"left"}
    ]
  },
  {
    chatID:11992,
    messages:[
      {SenderName:"Lena",content:"Hello Anna",direction:"right"},
      {SenderName:"Anna",content:"yo Lena!",direction:"left"}
    ]
  },
  {
    chatID:19291,
    messages:[
      {SenderName:"Mike",content:"Hello Ann.",direction:"right"},
      {SenderName:"Anna",content:"Hello Mike!",direction:"left"}
    ]
  },
  {
    chatID:21219,
    messages:[
      {SenderName:"Kevin",content:"Hello Ann.",direction:"right"},
      {SenderName:"Anna",content:"Hello Kevin",direction:"left"}
    ]
  },
  {
    chatID:292922,
    messages:[
      {SenderName:"Mike",content:"Hello Ann.",direction:"right"},
      {SenderName:"Anna",content:"Hello Jesse!",direction:"left"}
    ]
  }];
//Functions
  //Public
  function LoadChat(ID){
    //route
    //dummy code
    for(let i=0,l=dummyData.length;i<l;i++)
    {
      let chatID = dummyData[i].chatID;
      if(ID==chatID){
        console.log(dummyData);
        return dummyData[i].messages;
      }
    }

  }
  //Private
