//Imports
const store = require('../../store');

//Exports
// module.exports ={
//   LoadChat
// }
//Variables
  //public
  //private
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
  export function LoadChat(ID){
    //route
    //dummy code
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
  //Private
