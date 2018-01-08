//Imports
const srvc = require('./SignIn.Service');


//Exports
module.exports = {
  name: 'SignIn',
  data () {
    return data
  },
  methods: {
    LogIn:LogIn,
    OpenForgotUserForm:OpenForgotUserForm,
    OpenNewUserForm:OpenNewUserForm
  },
  components: {}//other components and templates go here
}
// Variables
  //public
  var data = {};
  data.msg = "wellcome to sign in."
  data.username = "";
  data.password = "";
  //private

//Functions

  //public
  /*
  * Logs user in
  */
  function LogIn(event){
     buttonCheck(()=>{
       let illegalUserChars =['*']
       let illegalPassChars =['*'];
       if(FormValidation()){}
        if(InputValidation(illegalUserChars,data.username))
         if(InputValidation(illegalPassChars,data.password)){
           data.password = EncryptPass(data.password);
           // console.log(data.username);
           // console.log(data.password);
          srvc.test();
         }
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

    event.preventDefault();
    callBack()
  }
  function EncryptPass(pass){

    return pass;
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
