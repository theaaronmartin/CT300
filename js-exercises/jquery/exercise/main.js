$(function(){
  $('#article-1 > h1');
  $('#article-1 h1:first-child');
  $('h1').last();
  $('#article-1 > h1').toggleClass('article-heading');
  $('p > a').attr('href', 'http://www.google.com');
  $('#article-1').append('<p>New Paragraph</p>');
  $('<p>Second new paragraph</p>').appendTo('#article-1');
  $('h1').css('color', 'red');
  $('#btn-click').on('click', function() {
    $('body').append('<article id="article-1"><h1>Coolio New JavaScript Framework</h1><p>Fuzzy Kitty is in! Run and download before it goes out of style.<a class="btn-get-it"href="get-it.html">Get it now!</a></p></article>');
  });
  $('#btn-mouse-enter').on('mouseenter', function() {
    $('body').append('<article id="article-1"><h1>Badass New JavaScript Framework</h1><p>Fuzzy Kitty is in! Run and download before it goes out of style.<a class="btn-get-it"href="get-it.html">Get it now!</a></p></article>');
  });
  $('#btn-mouse-enter').on('mouseleave', function() {
    $('<article id="article-1"><h1>Hella Cool Badass New JavaScript Framework</h1><p>Fuzzy Kitty is in! Run and download before it goes out of style.<a class="btn-get-it"href="get-it.html">Get it now!</a></p></article>').appendTo('body');
  });
});
