document.addEventListener("DOMContentLoaded", function() {
    var newtabButton = document.getElementById("newtab");
    newtabButton.addEventListener("click", function() {
        chrome.runtime.sendMessage({message: "open_new_window"});
    });
});