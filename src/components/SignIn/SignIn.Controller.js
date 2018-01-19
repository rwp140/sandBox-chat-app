//Imports
const srvc = require('./SignIn.Service');
// import srvc from './SignIn.Service';
const ForgotPasswordForm = require('./subComponents/ForgotPasswordForm').default;
const NewPasswordForm = require('./subComponents/NewPasswordForm').default;
const NewUserForm = require('./subComponents/NewUserForm').default;
const PopUp = require('./subComponents/PopUp').default;

//=============== Variables ====================================================
  //private --------------------------------------------------------------------
  var modal = document.getElementById('general-Pop-Up');
  //public ---------------------------------------------------------------------
  var data = {};
  data.msg = "Forgot Password?";
  data.username = "Anna@email.com";
  data.password = "Password";
//===============Functions======================================================
  //Private---------------------------------------------------------------------
  /*
  * Sets up anything needed on mobile platform, disables default event, and runs
  * any algorythm we make to determin the user genuinly pressed the button
  */
  function buttonCheck(callBack,event){
    event.preventDefault();
    callBack()
  }
  function EncryptPass(pass){
    //encrypt
    return pass;
  }
  /*
  * Runs any form validation we need
  */
  function FormValidation(){
    var bool = true;
    //validation checks
    return bool;
  }
  /*
  * Runs any data validation we need
  */
  function InputValidation(IllegalChars,string){
    var bool = true;
    //character check
    for(let i =0,l = IllegalChars.length;(i<l && bool==true);i++){
      let illegalChar = IllegalChars[i];
      for(let j=0,c=string.length;(j<c&&bool==true);j++){
        let char = string[j];
        if(char == illegalChar)bool == false
      }
    }

    return bool;
  }
  //public----------------------------------------------------------------------
  function closeModal(){
    modal.style.display='none';
  }
  /*
  * Logs user in
  */
  function LogIn(event,r){
     buttonCheck(()=>{
       let illegalUserChars =['*']
       let illegalPassChars =['*'];
       if(FormValidation()){}
        if(InputValidation(illegalUserChars,data.username))
         if(InputValidation(illegalPassChars,data.password)){
           data.password = EncryptPass(data.password);
           srvc.SignInUserPost(this.$router);
         }
     },event);
  }
  function OpenForgotPassForm(event){
    buttonCheck(()=>{
      modal = document.getElementById('forgot-pass-form');
      modal.style.display='block';
    },event);
  }
  function OpenNewUserForm(event){
     buttonCheck(()=>{
       modal = document.getElementById('new-user-form');
       modal.style.display='block';
     },event);
  }
  function SendForgotPassForm(event){
    buttonCheck(()=>{
      modal = document.getElementById('forgot-pass-form');
      closeModal();
    },event);
  }
  function SendNewUserForm(event){
     buttonCheck(()=>{
       closeModal();
     },event);
  }

//Exports
module.exports = {
  name: 'SignIn',
  data () {
    return data
  },
  methods: {
    closeModal:closeModal,
    LogIn:LogIn,
    OpenForgotPassForm:OpenForgotPassForm,
    OpenNewUserForm:OpenNewUserForm,
    SendForgotPassForm:SendForgotPassForm,
    SendNewUserForm:SendNewUserForm
  },
  components: {ForgotPasswordForm,NewPasswordForm,NewUserForm,PopUp}//other components and templates go here
}
