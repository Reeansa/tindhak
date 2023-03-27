$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin:10,
        responsive:{
            600:{
                items:3
            }
        }
    })
    $('.nonowl-carousel').owlCarousel({
        center: true,
        items:2,
        loop:false,
        margin:10,
        responsive:{
            600:{
                items:4
            }
        }
    })
});