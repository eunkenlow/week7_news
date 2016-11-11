function Article() {
  this._title = "";
  this._url = "";
  this._summary = "";
}
Article.prototype.addTitle = function(title) {
  this._title = title;
};
Article.prototype.addSummary = function(summary) {
  this._summary = summary;
};
Article.prototype.addURL = function(url) {
  this._url = url;
};
