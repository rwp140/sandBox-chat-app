const fauxUserTable = require('./fauxUserTable');
const fauxProfileTable = require('./FauxProfileDB');

export function GetUser(data){
  // console.log("finding user");
  // console.log(data);
  return new Promise((resolve, reject) => {
    let foundProfile = false;
    let found = false;
    let data_ = {};
    let users = fauxUserTable.data();
    let profiles = fauxProfileTable.data();
    // console.log(users);
    for(let i =0,l = users.length;i<l && !found; i++){
      if(data.username == users[i].SignIN){
        // console.log("email match");
        if(data.password == users[i].password){
          // console.log("password match");
          data_.pid = users[i].PID;
          // console.log(data_.pid);
          for(let n =0,c=profiles.length; n<c && !foundProfile ; n++){
            // console.log(profiles[n]);
            let _PID = profiles[n].PID;
            // console.log(_PID);

            if(data_.pid == _PID){
              data_.DisplayName = profiles[n].name;
              foundProfile = true;
            }
          }
          found=true;
        }
      }
    }
    if(found && foundProfile){
      // console.log("Found!");
      resolve(data_);
    }else if(!found){
      let message = "no user found";
      reject(message);
    }
  });
}
