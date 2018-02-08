// ========================= IMPORTS ===========================================
const express = require('express')
var router = express.Router()
// ====================== Controllers ==========================================
const userController = require('./Controllers/UserController');
const chatController = require('./Controllers/chatController');
const profileController = require('./Controllers/profileController');



// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the empty page route
router.get('/', function (req, res,next) {
  res.send('Please state the nature of the call')
})
// define the about api route
router.get('/about', function (req, res,next) {
  console.log('===== ===== About the chat api ===== =====');
  console.log('call /test to test "req" and "res" data.');
  res.send('About the chat api')
})
// define the test page route
router.get('/Test', function (req, res,next) {
  let message = ['Test Data is as Follows',req,res];
  console.log('Test Data is as Follows');
  console.log(req);
  console.log(res);
  res.send(message)
})
router.post('/Test', function (req, res,next) {
  let message = ['Test Data is as Follows',req,res];
  console.log('Test Data is as Follows');
  console.log(req);
  console.log(res);
  res.send(message)
})

// ===== users =====
router.route('/user')
  .get( function (req,res,next) {
    console.log('user access requested');
    res.send('user access requested');
  });

router.route('/user/SignIN')
  .post(userController.SignInUser);

router.route('/user/CreateNew')
  .post(userController.CreateNewUser);

  //forgot Password
  //forgot users
  //update password
  //send verification
  //register verification
  //Get PID

// ===== Profile =====
//POST: new profile; requires admin token

//GET: get profile

//GET: chat IDS

//POST: new CHAT ID; to relative USERS

// ===== Chat =====

//POST: create New chat


//check for chats


//GET: chat contacts


//GET: chat messages


//POST: new chat message

module.exports = router
