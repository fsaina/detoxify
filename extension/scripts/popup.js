window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

let counter = 0;

window.addEventListener('load', function load(event) {
    let toggleElement = document.getElementById("toggle-btn");

    toggleElement.addEventListener("change", function (e) {
        console.log('Changed to: ' + e.target.checked);
        browser.runtime.sendMessage({
            'message' : e.target.checked ? "true" : "false"
        });
    });
});

console.log('Sending count request');
browser.runtime.sendMessage({
    'message': 'toxicCounter'
}, function (response) {
    console.log('Reached response: ' + response.toxicCounter);
    if (response !== undefined && response.toxicCounter !== undefined) {
        document.getElementById("counter").innerText = response.toxicCounter.toString();
    } else {
        document.getElementById("counter").innerText = '0';
    }
});
