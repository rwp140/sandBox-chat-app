const fauxUserTable = require('./fauxUserTable');

export function GetUser(data){
  // console.log("finding user");
  // console.log(data);
  return new Promise((resolve, reject) => {
    let found = false;
    let data_ = {};
    let users = fauxUserTable.data();
    // console.log(users);
    for(let i =0,l = users.length;i<l && !found; i++){
      if(data.username == users[i].SignIN){
        // console.log("email match");
        if(data.password == users[i].password){
          // console.log("password match");
          data_.pid = users[i].PID;
          found=true;
        }
      }
    }
    if(found){
      // console.log("Found!");
      resolve(data_);
    }else if(!found){
      let message = "no user found";
      reject(message);
    }
  });
}
