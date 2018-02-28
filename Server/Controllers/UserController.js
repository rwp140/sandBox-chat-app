//IMPORTS
const Core = require('./../Core');
const userModel = require('../Models/user.js');
const profileModel = require('../Models/profile');
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
    let userData = new userModel({
      userName:obj.userName,
      password:obj.password
    })
    //check for duplicate
    // userData.findOne({userName:userData.userName},(error,userdoc)=>{
    //   if(error){
    //     console.error("ERROR: ",
    //     "Error durring find request",
    //     "- During user creation "+userData.userName+" was not found.",
    //     "- Either the property is null,",
    //     "- or There is an issue with the DB.",
    //     "Please check all nodes and poitns of interaction.");
    //   }
    //   console.log(userDoc);
    //   if(userdoc){
    //     console.error("ERROR: ",
    //     "Error durring user creation",
    //     "- "+userData.userName+" was found.",
    //     "- Either the update the old user,",
    //     "- or Check your fields and resubmit.");
    //   }else{
    //
    //   }
    // });
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
