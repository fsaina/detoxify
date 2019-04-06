window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

// function sendMessageToTabs(tabs) {
//     for (let tab of tabs) {
//         browser.tabs.sendMessage(
//             tab.id,
//             {message: "pause"}
//         );
//     }
// }
//
// function pauseInCurrentTab() {
//     alert('CLicked');
//     console.log('CLICKED');
//     browser.tabs.query({
//         currentWindow: true,
//         active: true
//     }).then(sendMessageToTabs);
// }

window.addEventListener('load', function load(event) {
    document.getElementById("click-btn").addEventListener("click", function (e) {
        console.log('CLICKED');
        browser.runtime.sendMessage({
            'clicked' : true
        });
    });
});
console.log('POPUP');