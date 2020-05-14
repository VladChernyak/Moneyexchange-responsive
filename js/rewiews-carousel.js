$('document').ready(function() {
    let owl = $('.owl-carousel');

    owl.owlCarousel({
        margin: 70,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
        
    });

    $('.reviews__carousel-arrow.arrow-right').click(function() {
        owl.trigger('next.owl.carousel');
    });

    $('.reviews__carousel-arrow.arrow-left').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    owl.on('translate.owl.carousel', function() {
        $('.reviews__carousel-arrow.disabled').removeClass('disabled');
    })

    owl.on('translated.owl.carousel', function() {
        if($('.owl-item.active:last-child')[0] == $('.owl-item:last-child')[0]) {
            $('.reviews__carousel-arrow.arrow-right').addClass('disabled');
        }
        
        else if($('.owl-item.active:first-child')[0] == $('.owl-item:first-child')[0]) {
            $('.reviews__carousel-arrow.arrow-left').addClass('disabled');
        }
    })
})