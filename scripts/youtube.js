$(document).ready(function(){

    setTimeout(function(){
        $bubble = $('.clippy-text');

        $bubble.html(
            '<p>It looks like you\'re on YouTube. What do you want to watch?<br />' +
            '<ul class="clippy-list"><li><a href="https://www.youtube.com/results?search_query=a+cat">A cat.</a></li>' +
            '<li><a href="https://www.youtube.com/results?search_query=fuckin+siiiickkk+skateboard+tricks">fuckin siiiickkk skateboard tricks.</a></li>' +
            '<li><a href="https://www.youtube.com/results?search_query=let%27s+play">some asshole playing video games</a></li></ul></p>'
        );
    }, 2000)
});