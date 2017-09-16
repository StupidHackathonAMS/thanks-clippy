$(document).ready(function(){
    $('body').mousemove(function(event){
        randomNumber = Math.random() * 100;

        if (randomNumber < 3 && randomNumber > 0) {
            $container.animate({
                left: event.pageX,
                top: event.pageY,
            }, 500, function(){
                $speechBubble = $('.clippy-text');
                $speechBubble.html('Hehe! Where you going lol??');
            });
        }
    });
});