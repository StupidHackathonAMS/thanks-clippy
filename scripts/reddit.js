$(document).ready(function(){
    $link = $('.thing:nth(5)');
    $title = $link.find('a.title.may-blank');

    width = $title.width();
    position = $title.position();

    console.log(width);

    setTimeout(function(){
        $upvote = $link.find('.arrow.up');
        $upvote.click();

        $container = $('.clippy-container');
        $container.animate({
            left: position.left + width + 20, top: position.top - 60
        }, 1000, function(){
            $speechBubble = $('.clippy-text');
            $speechBubble.html('Ha ha! This one looks funny. I\'ve upvoted it for you.');
        });

    }, 3000);
});