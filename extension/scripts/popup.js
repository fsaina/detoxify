window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

window.addEventListener('load', function load(event) {
    let toggleElement = document.getElementById("toggle-btn");

    toggleElement.addEventListener("change", function (e) {
        console.log('Changed to: ' + e.target.checked);
        browser.tabs.query({active: true, currentWindow: true}, function(tabs){
            let toggleAction = e.target.checked ? "resume" : "pause";
            browser.tabs.sendMessage(tabs[0].id, {'message' : toggleAction}, function() {});
        });
    });
});

console.log('Sending count request');
browser.tabs.query({active: true, currentWindow: true}, function(tabs){
    browser.tabs.sendMessage(tabs[0].id, {message: 'toxicCounter'},
        function(response) {
            console.log('Tab : ' + tabs[0].id);
            if (response !== undefined && response.toxicCounter !== undefined) {
                document.getElementById("counter").innerText = response.toxicCounter.toString();
            } else {
                document.getElementById("counter").innerText = '0';
            }
        });
});

console.log('Query toggle state...');
browser.tabs.query({active: true, currentWindow: true}, function(tabs){
    browser.tabs.sendMessage(tabs[0].id, {message: 'isEnabled'},
        function(response) {
            console.log('Tab : ' + tabs[0].id);
            console.log('Enabled : ' + response.enabled);
            if (response !== undefined && response.enabled !== undefined) {
                document.getElementById("toggle-btn").checked = response.enabled;
            }
        });
});
