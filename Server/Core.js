

function CheckReq(expects,req) {
  try{
    let obj = {}
    for(let i=0,l=expects.length;i<l;i++){
      let expect = expects[i];
      CheckExpect(expect,req,(data)=>{
        if(expect[1]=='string'){
        if(expect[2]){
          data = Validate(data,expect.Invalids);
        }
          data = Escape(data);
        }
        obj[expect[1]] = data;
      });
    }
    return obj;
  } catch(e){
    console.error(e);
  }
}

function CheckExpect(expect, req, callBack){
  if(req[expect[name]]){
    let data = req[expect.name]
    if(!req[expect.name])
    if(typeof(data) == expect.type){
      callBack(data);
    }
  }
}

function Escape(data) {
  //any extra escapes go here
  return encodeURIComponent(data)
}

function Validate(Prop,Invalids) {
  for(let x=0,xl=Invalids.length;x<xl;x++){
    for(let y=0,yl=Prop.length;y<yl;y++){
      if(Prop[y]==Invalids[x]){
        throw (prop,prop[y],invalids[x]+" is an invalid character");
      }
    }
  }
}
