console.log('Background script started.');

window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

function isYoutubeUrl(url){
    var regExp = /^.*(youtube.com\/).*/;
    return url.match(regExp);
}

function notifyTabUrlUpdated(tabId) {
    browser.tabs.sendMessage(tabId, {
        message: 'tab-updated'
    });
}

browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url !== undefined && isYoutubeUrl(changeInfo.url)) {
        console.log('Updated tab #' + changeInfo.url);
        notifyTabUrlUpdated(tabId);
    }
});

browser.runtime.onMessage.addListener(function(message, sender) {
    let isEnabled = message.enabled ? "resume" : "pause";
    console.log('Toggle changed to: ' + message.enabled);

    browser.tabs.query({active: true, currentWindow: true}, function(tabs){
        browser.tabs.sendMessage(tabs[0].id, {message: isEnabled}, function(response) {});
    });
});