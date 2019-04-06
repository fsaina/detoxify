// const Classifier = require('./classifier/classifier.js');
const NaiveBayes = require('./classifier/bayes.js');
// const Vectorizer = require('./classifier/vectorizer.js');

/**
 * Returns 1 if comment is toxic, 0 otherwise.
 *
 * @param comment is null terminated string representation of a comment.
 */
function classifyComment(comment) {
    // const vector = vectorizer.vectorize(comment);
    return classifier.categorize(comment);
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

    if (classifyComment(commentInnerText) === 'positive') {
        console.log('Toxic comment: ' + commentInnerText);
        addBlurFilter(commentTextElement);
        addHooverListener(commentTextElement);
    }
}

function addMutationObserverOnCommentsLoading(target) {
    const config = {
        childList: true
    };

    observer = new MutationObserver(function(mutations) {
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

        if (commentsElement === null
        || commentsElement[1] === null
        || commentsElement[2] === null) {
            return;
        }

        const contentsElement = commentsElement.children[1].children[2];
        if (contentsElement !== null) {
            clearInterval(interval);
            console.log('Loaded: contents');
            addMutationObserverOnCommentsLoading(contentsElement);
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

function initializeDetoxifier() {
    console.log('Initializing detoxification...');
    globalCommentId = 0;
    if (observer !== undefined && observer !== null) {
        observer.disconnect();
    }

    activePollFor('comments');
}

// const vectorizer = new Vectorizer();
const classifier = new NaiveBayes();
let globalCommentId = 0;
let observer;

window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === 'tab-updated') {
        initializeDetoxifier();
    }
});

initializeDetoxifier();
