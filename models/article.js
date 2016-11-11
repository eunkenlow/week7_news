Article =  function() {
  this._headline = ""
  this._url = ""
  this._summ = ""
};

Article.prototype.addHeadline = function(headline) {
  this._headline = headline;
};

Article.prototype.addUrl = function(url) {
  this._url = url;
};

Article.prototype.addSummary = function(summary) {
  this._summ = summary;
};
