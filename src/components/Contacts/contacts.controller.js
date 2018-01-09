//Imports
const svc = require('./contacts.service');
const TestPlate = require('./Template/Test').default;
//Exports
module.exports = {
  name: 'Contacts',
  data () {
    return {
      msg: 'Welcome to contacts'
    }
  },
  methods: {
    LoadNewChat:LoadNewChat
  },
  components: {
    TestPlate
  }
}
//Variables
  //Public
  var Contacts = [{Pid:'',Name:''}];
  var Users = [''];
  //Private
//Functions
  //Public
  function LoadProfile() {

  }
  function LoadNewChat() {
    // console.log(svc);
    svc.LoadChat();
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

  }
