//IMPORTS
const Core = require('./../Core');
const userModel = require('../Models/user');
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
      InValids:[]
    },
    {
      name:'Password',
      Type:'string',
      InValids:[]
    },
    {
      name:'Password',
      Type:'string',
      InValids:[]
    }
  ]
    //test object
    //validate and \escape properties
    let obj = Core.CheckReq(Expects,req);
    //encode/hash
    console.log(obj);

    //store object/model
    //check for duplicate
    userModel.findOne({userName:obj.userName},(err,userdoc)=>{
      console.log(userDoc);
    });
      //establish new model onject
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
