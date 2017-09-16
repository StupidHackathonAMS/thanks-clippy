$(document).ready(function(){

    $('body').prepend('<div class="clippy clippy-container"></div>')

    $container = $('.clippy-container');

    if (chrome.extension.inIncognitoContext === false) {
        $container.load(chrome.extension.getURL('assets/clippy.html'));
    }

    if (chrome.extension.inIncognitoContext === true) {
        $('body').append('<div class="clippy-incognito"></div>');
        $container.load(chrome.extension.getURL('assets/incognito.html'));
    }

    $container.animate({right: '+=210'}, 1000, function(){});
})
