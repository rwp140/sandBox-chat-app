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
    contacts:["Chat-Bot"],
    messages:[
      {SenderName:"Chat-Bot",content:"Hello I'm chat bot.",direction:"right"},
      {SenderName:"Anna",content:"Hello Chat Bot.",direction:"left"}
    ]
  },
  {
    chatID:'11992',
    contacts:["Lena"],
    messages:[
      {SenderName:"Lena",content:"Hello Anna",direction:"right"},
      {SenderName:"Anna",content:"yo Lena!",direction:"left"}
    ]
  },
  {
    chatID:'19291',
    contacts:["Mike"],
    messages:[
      {SenderName:"Mike",content:"Hello Ann.",direction:"right"},
      {SenderName:"Anna",content:"Hello Mike!",direction:"left"}
    ]
  },
  {
    chatID:'21219',
    contacts:["Kevin"],
    messages:[
      {SenderName:"Kevin",content:"Hello Ann.",direction:"right"},
      {SenderName:"Anna",content:"Hello Kevin",direction:"left"}
    ]
  },
  {
    chatID:'292922',
    contacts:["Jesse"],
    messages:[
      {SenderName:"Jesse",content:"Hello Ann.",direction:"right"},
      {SenderName:"Anna",content:"Hello Jesse!",direction:"left"}
    ]
  }];
//Functions
  //Public
  function LoadChat(ID){
    //route
    //dummy code
    console.log(ID);
    let mesagesData = [{SenderName:"System",content:"No messages yet.",direction:"right"}];
    let found = false;
    for(let i=0,l=dummyData.length; i<l&&!found; i++)
    {
      let chatID = dummyData[i].chatID;
      console.log("checking",ID,chatID);
      if(ID==chatID){
        console.log("found",ID,chatID);
        // console.log(dummyData);
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
    console.log(mesagesData);
    return mesagesData;
  }
  //Private
