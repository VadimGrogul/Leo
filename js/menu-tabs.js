$(document).ready(function(){
    $(".menu-link").click(function(){
        $(".menu-link").removeClass("active");
        $(this).addClass("active");
    })
})