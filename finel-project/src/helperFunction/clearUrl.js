export function replaceHistoryUrl(url) {
  window.history.replaceState(null, "", url);
}
