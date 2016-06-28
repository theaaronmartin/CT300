function getUsers(success, error) {
 var newRequest = new XMLHttpRequest();

 newRequest.onreadystatechange = function() {
   if (this.readyState === 4) {
     if (this.status === 200) {
       success(this.responseText);
     } else {
       error(this.status);
     }
   }
 };

 newRequest.open('GET', 'http://jsonplaceholder.typicode.com/users');
 newRequest.send();
}



document.getElementById('btn-get-users').addEventListener('click', function() {
 function onSuccess(responseText) {
   var object = JSON.parse(responseText)
   getUser(object)
 }

 function onError(status) {
   console.log(status);
 }

 getUsers(onSuccess, onError);
});

var getUser = function(object) {
  var users = [];
  for (var i = 0; i < object.length; i++) {
    var user = object[i];
    var newUsers = new User(user.id, user.name, user.username, user.email, user.phone, user.website)
    users.push(newUsers);
}
console.log(users);
};

var User = function(id, name, username, email, phone, website) {
  this.id = id,
  this.name = name,
  this.username = username,
  this.email = phone,
  this.phone = phone,
  this.website = website
};

// var users = new User(id: id, name: name, username: username, email: email, phone: phone, website: website);
