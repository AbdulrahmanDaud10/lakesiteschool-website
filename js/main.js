let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');
        
        if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('active');
        }
    }
    })
}

var siteCarousel = function () {

    if ( $('.hero-slide').length > 0 ) {
        $('.hero-slide').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            nav: true,
            dots: true,
            navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
            smartSpeed: 1000
        });
    }

    if ( $('.owl-slide-3').length > 0 ) {
        $('.owl-slide-3').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 10,
            margin: 30,
            autoplay: true,
            smartSpeed: 500,
            nav: true,
            dots: true,
            navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
            responsive:{
                600:{
                    items: 2
                },
                1000:{
                    items: 2
                },
                1200:{
                    items: 3
                }
            }
        });
    }

    if ( $('.owl-slide').length > 0 ) {
        $('.owl-slide').owlCarousel({
        center: false,
        items: 2,
        loop: true,
            stagePadding: 0,
        margin: 30,
        autoplay: true,
        nav: true,
            navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
        responsive:{
        600:{
            
            nav: true,
          items: 2
        },
        1000:{
            
            stagePadding: 0,
            nav: true,
          items: 2
        },
        1200:{
            
            stagePadding: 0,
            nav: true,
          items: 2
        }
        }
        });
    }


    if ( $('.nonloop-block-14').length > 0 ) {
        $('.nonloop-block-14').owlCarousel({
        center: false,
        items: 1,
        loop: true,
            stagePadding: 0,
        margin: 0,
        autoplay: true,
        nav: true,
            navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
        responsive:{
        600:{
            margin: 20,
            nav: true,
          items: 2
        },
        1000:{
            margin: 30,
            stagePadding: 0,
            nav: true,
          items: 2
        },
        1200:{
            margin: 30,
            stagePadding: 0,
            nav: true,
          items: 3
        }
        }
        });
    }

    $('.slide-one-item').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        pauseOnHover: false,
        nav: true,
        navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    });
};
siteCarousel();