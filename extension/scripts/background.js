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
