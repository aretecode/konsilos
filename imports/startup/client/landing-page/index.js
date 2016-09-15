import './subscribe-modal.html'
import './landing-layout.html'
import './landing-home.html'

import './owl.carousel.css'
import './dd.css'
import './style.css'
import './responsive.css'

import './jquery.dd'
import './owl.carousel.min'

Template.SubscribeModal.helpers({
    getLaunchGatheringCollection: () => Collections.LaunchGathering
})

Template.LandingPageLayout.onRendered(() => {
    $(() => {
        const $body = this.$('body')

        this.$('select').msDropdown()

        this.$('nav').clone().appendTo('.sub_menu')

        this.$('.menu a').click(() => $body.toggleClass('open_menu'))

        this.$('.close').click(() => $body.removeClass('open_menu'))

        this.$('.sub_menu nav ul li a').click(() => {
            $(this).parent().find('ul').slideToggle()
            $(this).toggleClass('active')
        })

        const owl = this.$('#owl-example1')

        owl.owlCarousel({
            items: 3,
            slideSpeed: 1000,
            itemsCustom: false,
            itemsDesktop: [1920,5],
            itemsDesktop: [1199,3],
            itemsDesktopSmall: [980,2],
            itemsTablet: [768,2],
            itemsTabletSmall: [640,2],
            itemsMobile: [462,1],
            singleItem: false,
            itemsScaleUp: false,
            autoPlay: true,
            navigation: true,
            pagination: true,
        })
    })

    this.$('.ui.subscribe.tiny.modal')
        .modal({ inverted: true})
        .modal('setting', 'transition', 'scale')
        .modal('attach events', '.positive.button', 'hide')
        .modal('attach events', '.subscribe', 'show')
})
