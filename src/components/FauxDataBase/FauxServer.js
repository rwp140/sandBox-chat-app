const userController = require('./FauxUserController');


export function test() {
  console.log('test');
}
export function get(path,_data){
  let data_ ={test:"test"};
  // console.log(_data);
  return new Promise((resolve, reject) => {
    //set route
    //get route
      //resolve promise
      switch (path) {
        case "/user":
          userController.GetUser(_data)
            .then((val)=>{
              // console.log("val");
              // console.log(val);
              data_=val;
              resolve(val);
          }).catch((reason)=>{
            reject(reason);
          });
          break;
      }
    // resolve(data_);
      //reject promise
  });
  // return data_;
}
export function post(path,data){

}
