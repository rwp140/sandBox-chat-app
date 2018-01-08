//Imports
// import router from '../.././router/index';
const Router = require('../.././router/index').default;

//Exports
module.exports = {
  SignInUserPost
}

//Varaibles
  //public
  //private
//Functions
  //public
  function SignInUserPost(){
    console.log('signing in user');
    LoadContacts();
  }
  //private
  function LoadContacts() {
    // window.location.pathname='contacts';
    // console.log(Router);
    Router.push({ path: '/contacts' });
  }
