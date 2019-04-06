window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

window.addEventListener('load', function load(event) {
    let toggleElement = document.getElementById("toggle-btn");
    toggleElement.addEventListener("change", function (e) {
        console.log('Changed to: ' + e.target.checked);
        browser.runtime.sendMessage({
            'enabled' : e.target.checked
        });
    });
});
