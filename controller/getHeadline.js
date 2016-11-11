var articles = new ArticleList();

function getTitle(articles) {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world?show-fields=thumbnail');

  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    ourData.response.results.forEach(function(object, index) {
      var newdiv = document.createElement("div");
      var newimg = document.createElement("div");
      newimg.innerHTML = "<a href="+ object.webUrl + "><img id=photo" + index + " src=" + object.fields.thumbnail + "></a>";
      newdiv.innerHTML = "<li><a href=" + "#" + index + " id=" +index+">"+ object.webTitle + "</a></li><br>";
      document.getElementById('news').appendChild(newimg);
      document.getElementById('news').appendChild(newdiv);
      var article = new Article();
      article.addHeadline(object.webTitle);
      article.addUrl(object.webUrl);
      articles.addArticleToList(article);

    });
    getSummary(articles._list);
  };

  ourRequest.send();

}
getTitle(articles);
