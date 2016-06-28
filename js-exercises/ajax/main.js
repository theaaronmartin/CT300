function getUsers(success, error) {
  var req = new XMLHttpRequest();

  req.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        success (this.responseText);
      } else {
        error (this.status);
      }
    }
  }
  req.open('GET', 'http://jsonplaceholder.typicode.com/users');
  req.send();
}

document.getElementById('btn-get-users').addEventListener('click', function() {
  function onSuccess(responseText) {
    console.log(responseText);
  }
  function onError(status) {
    console.log(status);
  }

  getUsers(onSuccess, onError);
});

var User = function(id, name, username, email, phone, website) {
  this.id = id,
  this.name = name,
  this.username = username,
  this.email = phone,
  this.phone = phone,
  this.website = website
}
