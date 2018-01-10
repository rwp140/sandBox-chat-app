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
  function SignInUserPost(router){
    console.log('signing in user');

    LoadContacts(router);
  }
  //private
  function LoadContacts(router) {
    // window.location.pathname='contacts';
    // console.log(Router);
    // console.log(router);
    router.push({ path: '/contacts' });

  }
