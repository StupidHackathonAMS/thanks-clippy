$(document).ready(function(){

    setTimeout(function(){
        $speechBubble = $('.clippy-text');
        $speechBubble.html(
            'I see you\'re trying to use Facebook. Let\'s see what pictures your mom liked!<br />' +
            '<button class="clippy-button">Ok.</button> <button class="clippy-button clippy-no-thanks">No thanks.</button>'
        );

        $('button.clippy-no-thanks').click(function(){
            $speechBubble.html('Alright! Let\'s go!<br /><button class="clippy-button clippy-cancel">Cancel</button>');

            $('button.clippy-cancel').click(function(){
                $(this).html('CANCEL!!');
                setTimeout(function(){
                    window.location.replace('https://www.facebook.com/search/top/?q=photos%20liked%20by%20my%20mom');
                }, 3000);
            });
        });
    }, 2000);
});