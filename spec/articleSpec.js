function unitAddHeadline() {
  var article = new Article();
  article.addHeadline('Donald Trump as President');
  expect.isTrue(article._headline === 'Donald Trump as President');
}

function unitAddSummary() {
  var article = new Article();
  article.addSummary('Donald Trump');
  expect.isTrue(article._summ === 'Donald Trump');
}
function unitAddUrl() {
  var article = new Article();
  article.addUrl('www.donaldtrump.com');
  expect.isTrue(article._url === 'www.donaldtrump.com');
}

unitAddHeadline();
unitAddSummary();
unitAddUrl();
