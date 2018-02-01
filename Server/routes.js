// ========================= IMPORTS ===========================================
const express = require('express')
var router = express.Router()
// ====================== Controllers ==========================================

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the empty page route
router.get('/', function (req, res) {
  res.send('Please state the nature of the call')
})
// define the about api route
router.get('/about', function (req, res) {
  console.log('===== ===== About the chat api ===== =====');
  console.log('call /test to test "req" and "res" data.');
  res.send('About the chat api')
})
// define the test page route
router.get('/Test', function (req, res) {
  let message = ['Test Data is as Follows',req,res];
  console.log('Test Data is as Follows');
  console.log(req);
  console.log(res);
  res.send(message)
})
router.post('/Test', function (req, res) {
  let message = ['Test Data is as Follows',req,res];
  console.log('Test Data is as Follows');
  console.log(req);
  console.log(res);
  res.send(message)
})

module.exports = router
