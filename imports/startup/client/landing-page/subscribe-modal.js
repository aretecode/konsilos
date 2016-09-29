import './subscribe-modal.html'

Template.SubscribeModal.helpers({
    launchGatheringCollection: () => Collections.LaunchGathering,
    getInitialLanguage: getUserLanguage
})

Template.SubscribeModal.onRendered(() => {
    const $successModal = this.$('.subscribed.modal').modal({
        inverted: true,
        blurring: true
    })

    AutoForm.addHooks('LaunchGatheringForm', {
        onSuccess: () => $successModal.modal('show')
    })
})
