import './landing-layout.html'
import './landing-home.html'

import './owl.carousel.css'
import './dd.css'
import './style.css'
import './responsive.css'

import './jquery.dd'
import './owl.carousel.min'

Template.LandingHome.helpers({
    getLaunchGatheringCollection: () => Collections.LaunchGathering
})

Template.body.onRendered(function() {
    $(function() {
        $('select').msDropdown();

        $('nav').clone().appendTo('.sub_menu')

        $('.menu a').click(function(e) {
            $('body').toggleClass('open_menu')
        });

        $('.close').click(function(e) {
            $('body').removeClass('open_menu')
        });

        $('.sub_menu nav ul li a').click(function(e) {
            $(this).parent().find('ul').slideToggle();
            $(this).toggleClass('active')
        });

        var owl = $('#owl-example1');

        owl.owlCarousel({
            items: 3,
            slideSpeed: 1000,
            itemsCustom: false,
            itemsDesktop: [1920,5],
            itemsDesktop: [1199,3],
            itemsDesktopSmall: [980,3],
            itemsTablet: [768,3],
            itemsTabletSmall: [640,2],
            itemsMobile: [462,1],
            singleItem: false,
            itemsScaleUp: false,
            autoPlay: true,
            navigation: true,
            pagination: true,
        });
    });
})
