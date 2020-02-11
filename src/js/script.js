"use strict";

$(document).ready(function(){
    $('.carousel__inner').slick({
        // adaptiveHeight: true,
        speed: 800,
        prevArrow: '<button type="button" class="slick-prev"><img src = "img/sliders/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src = "img/sliders/right.svg"></button>',
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function(){
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass
            ('catalog__content_active').eq($(this).index()).addClass
            ('catalog__content_active');
    });

    function toggleSlide(item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #order, #thanks').fadeOut('smol');
    });

    $('.button_mini').each(function(i){
        $(this).on('click', function(){
            $('#order .modal__subheader').text($('.catalog-item__supheader').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function valideForms(form){
        $(form).validate({
            rules:{
                name: 'required',
                phone: 'required',
                emal: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: 'Пожалуйста, введите своё имя',
                phone: 'Пожалуйства, введите свой номер телефона',
                email:{
                    required: 'Пожалуйства, введите свою почту',
                    email: 'Неправильно введён адрес почты'
                }
            }
        });
    }

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

    $('input[name = phone]').mask('+7 (999) 999-99-99');

    $(window).scroll(function(){
        if($(this).scrollTop()>1600){
            $('.scrol').fadeIn();
        }else{
            $('.scrol').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    }); 

    new WOW().init();
});

