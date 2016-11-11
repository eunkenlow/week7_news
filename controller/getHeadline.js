var articles = new ArticleList();

function getTitle(articles) {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?');

  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    ourData.response.results.forEach(function(object, index) {
      var newdiv = document.createElement("div");
      newdiv.innerHTML = "<li><a href=" + "#" + index + " id=" +index+">"+ object.webTitle + "</a></li>";
      document.getElementById('news').appendChild(newdiv);
      var article = new Article();
      article.addHeadline(object.webTitle);
      article.addUrl(object.webUrl);
      console.log(articles)
      articles.addArticleToList(article);

    });
    getSummary(articles._list);
  };

  ourRequest.send();

}
getTitle(articles);
