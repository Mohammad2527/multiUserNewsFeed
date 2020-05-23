var database = [
  {
    username: "Md",
    password: "secret"
  },
  {
    username: "Sally",
    password: "123"
  },
  {
    username: "Bobby",
    password: "007"
  },
];

var newsfeed = [
  {
    username:"Bobby",
    timeline: "Tired of learning"
  },
  {
    username: "Sally",
    timeline: "JS is cool"
  },
  {
    username: "Billy",
    timeline: "JS is fun"
  }
];
function isUserValid(username, password) {
  for (var  i = 0; i< database.length; i++){
    if(database[i].username === username &&
       database[i].password === password){
         return true;
}
}
return false;
}

function signIn(username, password){
    if(isUserValid(username, password)){
         console.log(newsfeed);
       }else {
         alert("Sorry, wrong username and password");
       }

  }
  // if (user === database[0].username &&
  //   pass === database[0].password){
  //     console.log(newsFeed);
  //   }else {
  //     alert("Sorry, wrong username and password!");
  //   }
  

  var userNamePrompt = prompt("enter your user name: ");
  var passwordPrompt = prompt ("Enter your password: ");
  signIn(userNamePrompt, passwordPrompt);
