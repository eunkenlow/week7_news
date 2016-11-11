makeUrlChangeShowSummaryForCurrentPage();

function makeUrlChangeShowSummaryForCurrentPage() {
  window.addEventListener("hashchange", showSummaryForCurrentPage);
}

function showSummaryForCurrentPage() {
  showSummary(getSummaryFromUrl(window.location));
}

function getSummaryFromUrl(location) {
  return articles._list[location.hash.split("#")[1]]._summ;
}

function showSummary(summary) {
  document
  .getElementById("summary")
  .innerHTML = summary;
}
