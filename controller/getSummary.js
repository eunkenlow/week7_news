function getSummary(list) {
  list.forEach(function(element) {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + element._url + "");

    //xhr.setRequestHeader('Accept', 'application/json');

    xhr.onload = function() {
      var summaryData = JSON.parse(xhr.response);
      element.addSummary(summaryData.sentences.join(" "));
    };
    xhr.send();
  });

}
