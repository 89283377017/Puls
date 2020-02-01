"use strict";

$(document).ready(function(){
    $('.carousel__inner').slick({
        // adaptiveHeight: true,
        speed: 800,
        prevArrow: '<button type="button" class="slick-prev"><img src = "../img/sliders/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src = "../img/sliders/right.svg"></button>',
    });
});