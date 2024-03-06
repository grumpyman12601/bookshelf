document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('openNewWindow').addEventListener('click', function() {
    // Create a new window
    chrome.windows.create({
      type: 'popup',
      focused: false,
      top: 1,
      left: 1,
      height: 1,
      width: 1,
      url: 'test2.html'
    }, function(window) {
      // Do something with the created window if needed
      console.log('New window created with ID: ' + window.id);
    });
  });
});
