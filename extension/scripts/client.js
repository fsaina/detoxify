const Classifier = require('./classifier/classifier.js');
const Vectorizer = require('./classifier/vectorizer.js');

/**
 * Returns 1 if comment is toxic, 0 otherwise.
 *
 * @param comment is null terminated string representation of a comment.
 */
function classifyComment(comment) {
    const vector = vectorizer.vectorize(comment);
    return classifier.predict(vector);
}

function addBlurFilter(element) {
    element.style.filter = "blur(2px)";
}

function removeBlurFilter(element) {
    element.style.filter = null;
}

function addHooverListener(child) {
    child.onmouseover = function() {
        removeBlurFilter(child);
    };

    child.onmouseout = function () {
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
const vectorizer = new Vectorizer();
const classifier = new Classifier();

window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

console.log('Start polling...');
activePollFor('comments');
