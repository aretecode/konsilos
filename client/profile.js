Template.Profile.events({
    'submit #profile-form': (event, templateInstance) => {
        event.preventDefault();

        const name = templateInstance.find('#userFullName').value;

        Meteor.call('updateProfile', { name });
    }
});
