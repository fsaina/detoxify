(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Returns 1 if comment is toxic, 0 otherwise.
 *
 * @param comment is null terminated string representation of a comment.
 */
function classifyComment(comment) {
    return 1;
}

function addBlurFilter(element) {
    element.style.filter = "blur(2px)";
}

function removeBlurFilter(element) {
    element.style.filter = null;
}

function addHooverListener(child) {
    child.onmouseover = function(event) {
        removeBlurFilter(child);
    };

    child.onmouseout = function (event) {
        addBlurFilter(child);
    };
}


function markCommentIfToxic(commentNode) {
    let commentTextElement = commentNode.children[0].children[1].children[1].children[1].children[0];
    let commentInnerText = commentTextElement.innerText;

    if (classifyComment(commentInnerText) === 1) {
        console.log('Toxic comment: ' + commentInnerText);
        addBlurFilter(commentTextElement);
        addHooverListener(commentTextElement);
    }
}

function addMutationObserver(target) {
    const config = {
        childList: true
    };

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function (mutation) {
            let commentNode = mutation.target.childNodes[globalCommentId];
            console.log('Mutation #' + globalCommentId + ': ' + commentNode);
            markCommentIfToxic(commentNode);
            globalCommentId += 1;
        })
    });

    observer.observe(target, config);
}

function activePollForContentsElement(commentsElement) {
    const interval = setInterval(function () {
        const contentsElement = commentsElement.children[1].children[2];
        if (contentsElement !== null) {
            clearInterval(interval);
            console.log('Loaded: contents');
            addMutationObserver(contentsElement);
        } else {
            console.log('Not loaded yet: contents');
        }
    }, 100);
}

function activePollFor(elementId) {
    const interval = setInterval(function () {
        const commentsElement = document.getElementById(elementId);
        if (commentsElement !== null) {
            clearInterval(interval);
            console.log('Loaded: ' + elementId);
            activePollForContentsElement(commentsElement);
        } else {
            console.log('Not loaded yet: ' + elementId);
        }
    }, 100);
}

let globalCommentId = 0;

window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

console.log('Start polling...');
activePollFor('comments');

},{}]},{},[1]);
