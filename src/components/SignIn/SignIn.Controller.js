//Imports
const srvc = require('./SignIn.Service');
// import srvc from './SignIn.Service';
const ForgotPasswordForm = require('./subComponents/ForgotPasswordForm').default;
const NewPasswordForm = require('./subComponents/NewPasswordForm').default;
const NewUserForm = require('./subComponents/NewUserForm').default;
const PopUp = require('./subComponents/PopUp').default;

//Exports
module.exports = {
  name: 'SignIn',
  data () {
    return data
  },
  methods: {
    closeModal:closeModal,
    LogIn:LogIn,
    OpenForgotUserForm:OpenForgotUserForm,
    OpenNewUserForm:OpenNewUserForm
  },
  components: {ForgotPasswordForm,NewPasswordForm,NewUserForm,PopUp}//other components and templates go here
}
// Variables
  //public
  var data = {};
  data.msg = "Forgot Password?";
  data.username = "";
  data.password = "";
  //private
  var modal = document.getElementById('general-Pop-Up');
  //getElementById('myModal');
//Functions

  //public
  function closeModal(){
    modal.style.display='none';
  }
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
          srvc.SignInUserPost();
         }
     },event);
  }

  function OpenForgotUserForm(event){
    modal = document.getElementById('general-Pop-Up');
    buttonCheck(()=>{
      console.log(modal);
      console.log('forgot user?');
      console.log(data.msg);
      modal.style.display='block';
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
