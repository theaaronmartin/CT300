$('#post-btn').on('click', function() {

$.ajax('http://jsonplaceholder.typicode.com/posts', {
  method: 'GET'
})
  .done(function(post) {
    var postList = [];
      for (var i = 0; i < post.length; i++) {
        var allPosts = post[i];
        allPosts = new Post(allPosts.body, allPosts.name, allPosts.title, allPosts.userId);
        postList.push(allPosts);
      }
      console.log(postList);
      display();
  })
  .fail(function(err) {
    console.log('error');
  })
  .always(function(complete) {
    console.log('complete');
  });
  var post = new Post();
});

function Post(body, id, title, userId) {
  this.body = body,
  this.name = name,
  this.title = title,
  this.userId = userId
};

var display = function() {
  var loadPosts = document.getElementsByTagName('p');
  loadPosts.append('<p></p>');
}
