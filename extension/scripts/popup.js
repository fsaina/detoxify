window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

function onPageUnsuported() {
    document.getElementById("toggle-btn").disabled = true;
    document.getElementById("toggle-btn").checked = false;
    document.getElementById("txt1").innerText = "Sorry, this domain is not supported";
    document.getElementById("counter").innerText = "  ";
    document.getElementById("txt2").innerText = "...yet :)";
    document.getElementById("txt3").innerText = "";
}

function onPageSuported() {
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

}

console.log('Checking if this page is supported');
browser.tabs.query({active: true, currentWindow: true}, function(tabs){
    browser.tabs.sendMessage(tabs[0].id, {message: 'isContentsPageHere'},
        function(response) {
            console.log('Tab : ' + tabs[0].id);
            console.log('Content returned alive: ' + response);
            if (response === undefined || response.alive === undefined || response.alive === false) {
                onPageUnsuported();
            } else {
                onPageSuported()
            }
        });
});

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