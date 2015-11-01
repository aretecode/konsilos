Template.Greeting.helpers({
    firstName() {
        return Meteor.user().profile.name.split(' ')[0];
    },
    isVerifiedEmail() {
        return Meteor.user().emails[0].verified;
    }
});
