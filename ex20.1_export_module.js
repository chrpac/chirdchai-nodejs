exports.function1 = function(){
  console.log("function1 works");
}

exports.function2 = (username, password)=>{
  console.log("function2 works");
  console.log(`usename: ${username}, password: ${password}`);
}