const CONTEXT_MENU_ID = "MY_CONTEXT_MENU";

function scrollUp(info) {
  if (info.menuItemId !== CONTEXT_MENU_ID) {
    return;
  }
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        functionToInvoke: "scrollTop",
      });
    }
  );
}

chrome.contextMenus.create({
  title: "Scroll to top",
  contexts: ["page"],
  id: CONTEXT_MENU_ID,
});
chrome.contextMenus.onClicked.addListener(scrollUp);
