import './subscribe-modal.js'

import './landing-layout.html'
import './landing-home.html'

import './owl.carousel.css'
import './style.css'
import './responsive.css'

import './owl.carousel.min'

const SUBSCRIBE_MODAL_CLASS = '.subscribe.modal'

Template.LandingPageLayout.events({
    'click .subscribe.button'(event) {
        const subscribeButton = event.currentTarget
        const subscribedFromValue = subscribeButton.dataset.pageSection

        $(SUBSCRIBE_MODAL_CLASS)
            .modal({
                onShow: () => {
                    const subscribedFromField = document.querySelector('input[name=subscribedFrom]')
                    subscribedFromField.value = subscribedFromValue
                }
            })
            .modal('show')
    }
})

Template.LandingPageLayout.helpers({
    getInitialLanguage: getUserLanguage
})

Template.LandingPageLayout.onRendered(() => {
    $(() => {
        const $body = this.$('body')

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

    this.$(SUBSCRIBE_MODAL_CLASS)
        .modal({
            inverted: true,
            blurring: true
        })
        .modal('setting', 'transition', 'scale')

    this.$('.language.dropdown').dropdown({
        onChange: changeAppLanguage
    })
})
