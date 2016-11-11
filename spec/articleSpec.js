function unitAddTitle() {
  var article = new Article();
  article.addTitle('Donald Trump as President');
  expect.isTrue(article._title === 'Donald Trump as President');
}

function unitAddSummary() {
  var article = new Article();
  article.addSummary('Donald Trump');
  expect.isTrue(article._summary === 'Donald Trump');
}
function unitAddUrl() {
  var article = new Article();
  article.addURL('www.donaldtrump.com');
  expect.isTrue(article._url === 'www.donaldtrump.com');
}

unitAddTitle();
unitAddSummary();
unitAddUrl();
