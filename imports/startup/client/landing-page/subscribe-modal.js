import './subscribe-modal.html'

Template.SubscribeModal.helpers({
    getLaunchGatheringCollection: () => Collections.LaunchGathering
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
