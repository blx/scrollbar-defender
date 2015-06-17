
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        code:"document.onmousewheel=null;window.onmousewheel=null;window.onwheel=null;"
    });
});

