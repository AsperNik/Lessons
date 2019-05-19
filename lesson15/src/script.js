$(document).ready(function() {

    function animate() {
        $('.modal').animate({
            height: "show"
        },2000).css('display','block');
        $('.overlay').animate({
            opacity: "show"
        },3000).css('display','block');
    }

    $('.main_btna:first').click(animate);
    $('.main_btn').click(animate);
    $('nav li:eq(1)').click(animate);

    $('.close').click(()=> {
        $('.overlay').animate({
            opacity: 'hide'
        }, 1500);
        $('.modal').animate({
            height: 'hide'
        }, 2000);
    })
});