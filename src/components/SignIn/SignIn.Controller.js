//Imports


}
//Exports
module.exports = {
  name: 'SignIn',
  data () {
    return {
      msg: 'Welcome to SignIn'
    }
  },
  methods: {
    LogIN: LogIN,
    OpenForgotUserForm:OpenForgotUserForm,
    OpenNewUserForm:OpenNewUserForm
  },
  components: {}
}
//Functions

  //public
  function LogIN(event){
     buttonCheck(()=>{

     },event);
  }
  function OpenForgotUserForm(event){
     buttonCheck(()=>{

     },event);
  }
  function OpenNewUserForm(event){
     buttonCheck(()=>{

     },event);
  }
  //Private
  function buttonCheck(callBack,event){

    event.preventdefault();
    callBack()
  }
  function EncryptPass(){

  }
  function InputValidation(){

  }

//Event listeners
