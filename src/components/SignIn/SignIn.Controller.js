//Imports



//Exports
module.exports = {
  name: 'SignIn',
  data () {
    return {
      msg: 'Welcome to SignIn',//used for testing generally
      username:username,
      password:password
    }
  },
  methods: {
    LogIN: LogIN,
    OpenForgotUserForm:OpenForgotUserForm,
    OpenNewUserForm:OpenNewUserForm
  },
  components: {}//other components and templates go here
}
// Variables
  //public
  var username = "";
  var password = "";
  //private

//Functions

  //public
  /*
  * Logs user in
  */
  function LogIN(event){
     buttonCheck(()=>{
       if(FormValidation())
        if(InputValidation())
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
  /*
  * Sets up anything needed on mobile platform, disables default event, and runs
  * any algorythm we make to determin the user genuinly pressed the button
  */
  function buttonCheck(callBack,event){

    event.preventdefault();
    callBack()
  }
  function EncryptPass(){

  }
  /*
  * Runs any form validation we need
  */
  function FormValidation(){
    var bool = true;


    return bool;
  }
  /*
  * Runs any data validation we need
  */
  function InputValidation(IllegalChars,string){
    var bool = true;

    for(let i =0,l = IllegalChars.length;(i<l && bool==true);i++){
      let illegalChar = IllegalChars[i];
      for(let j=0,c=string.length;(j<c&&bool==true);j++){
        let char = string[j];
        if(char == illegalChar)bool == false
      }
    }

    return bool;
  }

//Event listeners
