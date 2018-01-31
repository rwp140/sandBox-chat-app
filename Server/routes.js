const express = require('express')
var router = express.Router()

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
  res.send('About the chat api')
})
// define the test page route
router.get('/Test', function (req, res) {
  let message = ['Test Data is as Follows',req,res];
  res.send(message)
})


module.exports = router
