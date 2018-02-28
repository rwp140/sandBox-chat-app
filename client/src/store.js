module.exports= {
  debug: true,
  state:{},
  setStateValue(value,newValue){
    if(debug)console.log(newValue,state,value,state[value]);
    state[value] = newValue;
  },
  clearStateValue(value){
    if(debug)console.log(state,value);
    state[value] = '';
  }
}


//needs review and better set up
//needs interaction with lcoal storage, and ecetera to allow for better persistent storage
