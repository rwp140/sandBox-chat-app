//Imports
const Router = require('../.././router/index').default;

//Exports
// module.exports = {
//   SignInUserPost
// }

//Varaibles
  //public
  //private
//Functions
  //public
  export function SignInUserPost(router){
    console.log('signing in user');

    LoadContacts(router);
  }
  //private
  export function LoadContacts(router) {

    router.push({ path: '/contacts' });

  }
