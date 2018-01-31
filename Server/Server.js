// ====================== IMPORTS ==========================================
const express          = require('express')
const mongoose         =   require('mongoose');
const bodyParser       = require('body-parser')

const cors             = require('cors')
const morgan           = require('morgan')

const passport         =   require('passport');
const session          =   require('express-session');
const cookieParser     =   require('cookie-parser');
const expressValidator =   require('express-validator');
const flash            =   require('express-flash');

// ====================== controllers ==========================================

// ====================== APLICATION ==========================================
const app = express()
const isDev = app.get('env') === 'development';

app.use(morgan('combined'))
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cors())



const passportConfig = require('./config/passport');

app.use(expressValidator());
app.use(cookieParser());
app.use(session({
  secret: 'sandbox TEST' ,
  resave: false,
  saveUninitialized: true,
  // cookie: {
  //   secure: true,
  //   maxAge: new Date(Date.now() + 3600000)
  // }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


//database
var databaseIP = 'mongodb://138.197.133.250:27017';//current mongo db IP
//for emergency testing use: 'mongodb://test1909:test1909@ds157723.mlab.com:57723/sandbox_test' <update these coments as said details change>
// or a local db set up mongodb://localhost:27017/test'
mongoose.Promise = global.Promise; //synchronize promises
mongoose.connect(databaseIP, { //conect to mongo dp ip
  //mongo options
  useMongoClient: true,
  /* other options */
});
mongoose.connection.on('error', (err) => { //mongo error check
  console.error(err);
  console.log('%s MongoDB connection error: Please make sure your desired MongoDB instance is currently running prior to node app launch.');
  process.exit();
});

app.listen(process.env.PORT || 8081)
