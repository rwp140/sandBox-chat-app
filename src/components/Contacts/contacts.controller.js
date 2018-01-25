//Imports
const svc = require('./contacts.service');
// const TestPlate = require('./Template/Test').default;
const topBar = require('./SubComponents/topBar').default;
const ContactItem = require('./SubComponents/ContactItem').default;
const store = require('../../store');
//================================ Variables ===================================
  //Private --------------------------------------------------------------------
  //Public ---------------------------------------------------------------------
  var data = {};
  data.msg ='Welcome to contacts';
  data.Contacts = [
    {Pid:'contacts not loaded',ReadReciept:[{Name:'contacts not loaded'}]},
    {Pid:'contacts not loaded',ReadReciept:[{Name:'if this persists please contact:(###)###-####'}]},
    {Pid:'contacts not loaded',ReadReciept:[{Name:'(###)###-#### or ####@####.com'}]}
  ];
  data.chatbot={ReadReciept:[{Name:'chat-bot'}]};
//================================ Functions ===================================
  //Private --------------------------------------------------------------------
  /*
  * Passes data to a new Contacts Item Template
  */
  function RENDERContactsItem(string){
    console.log(data.Contacts);

    svc.RENDERContactsListGET().then((val)=>{
      // console.log(data.Contacts);
      // console.log(val);
      data.Contacts=val;
      // console.log(data.Contacts);
      // console.log(data.Contacts[0]);
      // console.log(data.Contacts[0].ReadReciept);
      // console.log(data.Contacts[0].ReadReciept[0]);
      // console.log(data.Contacts[0].ReadReciept[0].Name);
    }).catch((message)=>{
      console.error("error message",message);
    });
  }
  //Public ---------------------------------------------------------------------
  function LoadProfile() {

  }
  function LoadNewChat(event,ID) {
    svc.LoadChatPage(this.$router,ID);
  }
  function RenderContactsList() {

  }
  function FilterContacts() {

  }
  function DisplayKeyBoard(){

  }

//Exports
module.exports = {
  name: 'Contacts',
  data () {
    return data
  },
  methods: {
    LoadProfile:LoadProfile,
    LoadNewChat:LoadNewChat,
    RenderContactsList:RenderContactsList,
    FilterContacts:FilterContacts,
    DisplayKeyBoard:DisplayKeyBoard
  },
  components: {
    topBar,ContactItem
  },
  mounted: RENDERContactsItem
}
