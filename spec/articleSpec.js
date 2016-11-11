function unitAddTitle() {
  var article = new Article();
  article.addTitle('Donald Trump as President');
  expect.isTrue(article._title === 'Donald Trump as President');
}

unitAddTitle();
