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
// console.log(store);
// console.log(store.state);
store.state.test = 'test';
// console.log(store);
// console.log(store.state);
//Variables
  //Public
  var data = {};
  data.msg ='Welcome to contacts';
  data.Contacts = [{Pid:'',Name:''}];
  // var Users = [''];
  //Private
//Functions
  //Public
  function LoadProfile() {

  }
  function LoadNewChat(event, router,ID) {
    // console.log(svc);
    // console.log('test');
    // console.log(ID);
    // let num = Math.random();
    // console.log('num',num);
    // store.state.chatID= num;
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
      // console.log(val);
      // console.log(data.contacts);
    }).catch((message)=>{

    });
  }
