//Imports
const svc = require('./contacts.service');
// const TestPlate = require('./Template/Test').default;
const topBar = require('./SubComponents/topBar').default;
const ContactItem = require('./SubComponents/ContactItem').default;
const store = require('../../store');
//Exports
module.exports = {
  name: 'Contacts',
  data () {
    return data
  },
  methods: {
    LoadNewChat:LoadNewChat
  },
  components: {
    topBar,ContactItem
  },
  mounted: RENDERContactsItem
}
//Variables
  //Public
  var data = {};
  data.msg ='Welcome to contacts';
  data.Contacts = [
    {Pid:'contacts not loaded',Name:'contacts not loaded'},
    {Pid:'contacts not loaded',Name:'if this persists please contact:(###)###-####'},
    {Pid:'contacts not loaded',Name:'(###)###-#### or ####@####.com'}
  ];
  // var Users = [''];
  //Private
//Functions
  //Public
  function LoadProfile() {

  }
  function LoadNewChat(event, router,ID) {

    svc.LoadChat(router,ID);
  }
  function RenderContactsList() {

  }
  function FilterContacts() {

  }
  function DisplayKeyBoard(){

  }
  //Private
  /*
  * Passes data to a new Contacts Item Template
  */
  function RENDERContactsItem(string){
    svc.RENDERContactsListGET().then((val)=>{
      data.Contacts=val;
    }).catch((message)=>{

    });
  }
