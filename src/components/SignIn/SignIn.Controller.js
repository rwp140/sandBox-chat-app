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
  function LogIN(){

  }
  function OpenForgotUserForm(){

  }
  function OpenNewUserForm(){

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
