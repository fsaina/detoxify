const Classifier = require('./classifier/classifier.js');
const Vectorizer = require('./classifier/vectorizer.js');
const Matcher = require('./classifier/matcher.js');

/**
 * Returns 1 if comment is toxic, 0 otherwise.
 *
 * @param comment is null terminated string representation of a comment.
 */
function classifyComment(comment) {
    if (matcher.check_match(comment) === 1) {
        return 1;
    }
    const vector = vectorizer.vectorize(comment);
    return classifier.predict(vector);
}

function addBlurFilter(element) {
    element.style.filter = "blur(3px)";
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
    if (commentNode === null
        || typeof(commentNode) === 'undefined'
        || commentNode.children[0] === null
        || typeof(commentNode.children[0]) === 'undefined'
        || commentNode.children[0].children[1] === null
        || typeof(commentNode.children[0].children[1]) === 'undefined'
        || commentNode.children[0].children[1].children[1] === null
        || typeof(commentNode.children[0].children[1].children[1]) === 'undefined'
        || commentNode.children[0].children[1].children[1].children[1] === null
        || typeof(commentNode.children[0].children[1].children[1].children[1]) === 'undefined'
        || commentNode.children[0].children[1].children[1].children[1].children[0] === null
        || typeof(commentNode.children[0].children[1].children[1].children[1].children[0]) === 'undefined') {
        return;
    }


    let commentTextElement = commentNode.children[0].children[1].children[1].children[1].children[0];
    let commentInnerText = commentTextElement.innerText;
    globalCommentId += 1;

    if (classifyComment(commentInnerText.toLowerCase()) === 1) {
        console.log('Toxic comment: ' + commentInnerText);
        addBlurFilter(commentTextElement);
        addHooverListener(commentTextElement);
        hideReplies(commentNode);
        toxicCommentsCounter += 1;
    }
}

function hideReplies(commentNode) {
    if (commentNode === null
    || typeof(commentNode) === 'undefined'
    || commentNode.children[1] === null
    || typeof(commentNode.children[1]) === 'undefined') {
        return;
    }
    commentNode.children[1].style.visibility='hidden'
}

function addMutationObserverOnCommentsLoading(target) {
    const config = {
        childList: true
    };

    observer = new MutationObserver(function(mutations) {
        mutations.forEach(function (mutation) {
            let commentNode = mutation.target.childNodes[globalCommentId];
            console.log('Mutation #' + globalCommentId + ': ' + commentNode);
            if (isEnabled) {
                markCommentIfToxic(commentNode);
            } else {
                console.log('Skip detoxifying.')
            }
        })
    });

    observer.observe(target, config);
}

function activePollForContentsElement(commentsElement) {
    const interval = setInterval(function () {

        if (commentsElement === null
        || typeof(commentsElement) === 'undefined'
        ||  commentsElement.children[1] === null
        || typeof(commentsElement.children[1]) === 'undefined'
        ||  commentsElement.children[1].children[2] === null) {
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
    toxicCommentsCounter = 0;
    if (observer !== undefined && observer !== null) {
        observer.disconnect();
    }

    activePollFor('comments');
}

const classifier = new Classifier();
const vectorizer = new Vectorizer();
const matcher = new Matcher();
let isEnabled = true;
let globalCommentId = 0;
let toxicCommentsCounter = 0;
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
    if (request.message === 'pause') {
        console.log('Detoxify disabled!');
        isEnabled = false;
    }
    if (request.message === 'resume') {
        console.log('Detoxify enabled!');
        isEnabled = true;
    }
    if (request.message === 'isEnabled') {
        sendResponse({enabled: isEnabled});
    }
    if (request.message === 'toxicCounter') {
        sendResponse({toxicCounter: toxicCommentsCounter});
    }
    if (request.message === 'isContentsPageHere') {
        sendResponse({alive: true});
    }
});

initializeDetoxifier();
