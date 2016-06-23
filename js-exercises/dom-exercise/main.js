var chain = document.getElementById('article-1').getElementsByTagName('h1')[0];

var tagName = document.getElementsByTagName('h1')[1];

var query = document.querySelector('#article-1 h1');

var all = document.querySelectorAll('h1')[1];

query.innerHTML = 'Now I\'m saying this!';

all.classList.toggle('new-class');

var google = document.getElementById('article-1').querySelector('a');
google.setAttribute('target', 'blank');
google.setAttribute('href', 'http://www.google.com');
