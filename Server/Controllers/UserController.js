//IMPORTS
const Core = require('./../Core');
//POST: new user requires admin token
exports.CreateNewUser = (req,reg,next) =>{
  //expects
    //email
    //password
    //token
  //should
    //adds a new user to the DB
    //sends verification request to given email
  let Expects =[
    {
      name:'Email',
      Type:'string',
      Valids:[]
    },
    {
      name:'Email',
      Type:'string',
      Valids:[]
    }
  ]
    //test object
    //validate and \escape properties
    let obj = Core.CheckReq(Expects,req);
    //encode/hash


    //store object/model

    //send verification

    next();
}
//POST: sign in user
exports.SignInUser = (req,reg,next) =>{
  //Test Object
  //validate and \esxape properties
}
//POST: Register Verification
exports.RegisterVerification = (req,reg,next) =>{

}

//POST: Update Password
exports.UpdatePassword = (req,reg,next) =>{

}

//GET: get PID <redundancy>
exports.GetPID = (req,reg,next) =>{

}
//GET: Send Forgot User Name
exports.SendForgotUserNameRequest = (req,reg,next) =>{

}
//GET: Send Forgot Password Request
exports.SendForgotPasswordRequest = (req,reg,next) =>{

}

//GET: Send Verification Request
exports.SendVerificationRequest = (req,reg,next) =>{

}

//Send Verification Request function
function SendVerificationRequestFunction() {

}
//verification check
function VerificationCheck() {

}
