chrome.runtime.onInstalled.addListener(function() {
  console.log("Extension Installed");
});

function openNewWindow() {
  chrome.windows.create({
    type: 'popup',
    focused: false,
    top: 1,
    left: 1,
    height: 1,
    width: 1,
    url: "window.html"
  }, function(window) {
    // Do something with the created window if needed
    console.log("New window created with ID: " + window.id);
  });
}

chrome.action.onClicked.addListener(openNewWindow);