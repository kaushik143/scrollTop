let scrollTop = function () {
  window.scrollTo(0, 0);
};

chrome.extension.onMessage.addListener(function (message, sender, callback) {
  if (message.functionToInvoke == "scrollTop") {
    scrollTop();
  }
});
