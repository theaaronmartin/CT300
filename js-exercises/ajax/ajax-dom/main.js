var Post = function(title, body) {
  this.title = title;
  this.body = body;
}

function getPostInfo() {
  var post = new Post();

  post.title = document.getElementById('title').value;
  post.body = document.getElementById('body').value;

  return post;
}

function savePost() {
  var req = new XMLHTTPRequest();

  req.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status === 201) {
        console.log(this.responseText);
      } else {
        // show error
      }

    }
  };

  req.open('POST', 'http://jsonplaceholder.typicode.com/posts');
  req.send(getPostInfo());
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn-save-post').addEventListener('click', savePost);
});
