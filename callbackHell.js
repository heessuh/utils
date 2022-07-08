//embedded callback functions can be hard to follow. Better to use async/await

function firstFunction(param, callback()=>{
  //do stuff
  callback()
})

firstFunction(param, function(){
  //do stuff
  secondFunction(param, function(){
    //do stuff
    thirdFunction(param, function(){
      //do stuff
    }
  }
})

