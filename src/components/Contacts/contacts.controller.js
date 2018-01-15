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
    return {
      msg: 'Welcome to contacts'
    }
  },
  methods: {
    LoadNewChat:LoadNewChat
  },
  components: {
    topBar,ContactItem
  },
  mounted: function () {console.log("mounted");}
}
// console.log(store);
// console.log(store.state);
store.state.test = 'test';
// console.log(store);
// console.log(store.state);
//Variables
  //Public
  var Contacts = [{Pid:'',Name:''}];
  var Users = [''];
  //Private
//Functions
  //Public
  function LoadProfile() {

  }
  function LoadNewChat(event, router) {
    // console.log(svc);
    console.log('test');
    // let num = Math.random();
    // console.log('num',num);
    // store.state.chatID= num;
    svc.LoadChat(router);
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
