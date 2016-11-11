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

unitAddTitle();
unitAddSummary();
