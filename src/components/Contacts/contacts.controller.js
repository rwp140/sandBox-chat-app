//Imports
var svc = require('./contacts.service');
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
