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

browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // if (message.enabled !== undefined) {
    //     let isEnabled = message.enabled ? "resume" : "pause";
    //     console.log('Toggle changed to: ' + message.enabled);
    //
    //     browser.tabs.query({active: true, currentWindow: true}, function(tabs){
    //         browser.tabs.sendMessage(tabs[0].id, {message: isEnabled}, function(response) {});
    //     });
    // }
    let counter = '3';
    if (message.message !== undefined) {
        if (message.message === "toxicCounter") {
            console.log('Sending count request from back');
            browser.tabs.query({active: true, currentWindow: true}, function(tabs){
                browser.tabs.sendMessage(tabs[0].id, {message: 'toxicCounter'},
                    function(response) {
                        if (response.toxicCounter !== undefined) {
                            console.log('Callback: ' + sendResponse);
                            console.log('Tab : ' + tabs[0].id);
                            counter = response.toxicCounter;
                            console.log('Counter set to : ' + counter);
                            sendResponse({toxicCounter: counter});

                        }
                    });
            });
        }
    }
});
