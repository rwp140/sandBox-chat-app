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
    {Pid:'contacts not loaded',Name:'contacts not loaded'},
    {Pid:'contacts not loaded',Name:'if this persists please contact:(###)###-####'},
    {Pid:'contacts not loaded',Name:'(###)###-#### or ####@####.com'}
  ];
  data.chatbotName=['chat-bot'];
//================================ Functions ===================================
  //Private --------------------------------------------------------------------
  /*
  * Passes data to a new Contacts Item Template
  */
  function RENDERContactsItem(string){
    svc.RENDERContactsListGET().then((val)=>{
      data.Contacts=val;
    }).catch((message)=>{

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
