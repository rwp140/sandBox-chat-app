//Imports
const Router = require('../.././router/index').default;
const store = require('../../store');
const FauxServer = require('../FauxDataBase/FauxServer');
// const Server = require('../.././router/index');

//Exports
// module.exports = {
//   SignInUserPost
// }

//Varaibles
  //public
  //private
//Functions
  //public
  export function SignInUserPost(router,userData){
    console.log('signing in user');

    FauxServer.get('/user',userData)
      .then((_data)=>{
        // console.log("promise");
        console.log(_data);
        // LoadContactsPage(router);
        store.state.PID = _data.pid;
        console.log(store.state);
        LoadContactsPage(router);
         // _data;
      }).catch((message)=>{
        console.error(message);
      });
    // console.log(data);
    // LoadContactsPage(router);
  }
  //private
  export function LoadContactsPage(router) {

    router.push({ path: '/contacts' });
  }
